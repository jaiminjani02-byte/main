const mineflayer = require('mineflayer')
const config = require('../config')

// systems
const movement = require('../systems/movement')
const combat = require('../systems/combat')
const follow = require('../systems/follow')
const chat = require('../systems/chat')
const jumpscare = require('../systems/jumpscare')

let reconnecting = false
let reconnectDelay = 5000

function createHerobrine() {
  const bot = mineflayer.createBot(config)

  bot.once('spawn', () => {
    console.log('Herobrine has joined...')

    // initialize all systems
    movement.init(bot)
    combat.init(bot)
    follow.init(bot)
    chat.init(bot)
    jumpscare.init(bot)
  })

  // 💀 prevent multiple reconnect spam
  bot.on('end', () => {
    if (reconnecting) return
    reconnecting = true

    console.log('Disconnected... retrying in', reconnectDelay)

    setTimeout(() => {
      reconnecting = false
      reconnectDelay = Math.min(reconnectDelay * 1.5, 60000)
      createHerobrine()
    }, reconnectDelay)
  })

  bot.on('kicked', (reason) => {
    console.log('Kicked:', reason)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })

  // ❤️ auto respawn
  bot.on('death', () => {
    console.log('I died... returning')
    setTimeout(() => {
      try { bot.respawn() } catch {}
    }, 3000)
  })
}

module.exports = { createHerobrine }