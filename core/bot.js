const mineflayer = require('mineflayer')
const config = require('../config')

const movement = require('../systems/movement')
const combat = require('../systems/combat')
const follow = require('../systems/follow')
const chat = require('../systems/chat')
const jumpscare = require('../systems/jumpscare')

let reconnectDelay = 5000

function startBot(updateStatus) {
  updateStatus("connecting")

  const bot = mineflayer.createBot(config)

  bot.once('spawn', () => {
    updateStatus("online")
    console.log("[BOT] Joined")

    movement.init(bot)
    combat.init(bot)
    follow.init(bot)
    chat.init(bot)
    jumpscare.init(bot)
  })

  bot.on('end', () => {
    updateStatus("disconnected")
    console.log("[BOT] Disconnected")

    setTimeout(() => {
      reconnectDelay = Math.min(reconnectDelay * 1.5, 60000)
      startBot(updateStatus)
    }, reconnectDelay)
  })

  bot.on('error', (err) => {
    console.log("[ERROR]", err.message)
    updateStatus("error")
  })

  bot.on('kicked', (r) => {
    console.log("[KICKED]", r)
  })

  bot.on('death', () => {
    console.log("[BOT] Died")
    setTimeout(() => {
      try { bot.respawn() } catch {}
    }, 3000)
  })
}

module.exports = { startBot }
