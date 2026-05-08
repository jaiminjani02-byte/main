const mineflayer = require('mineflayer')
const config = require('../config')

const movement = require('../systems/movement')
const combat = require('../systems/combat')
const follow = require('../systems/follow')
const chat = require('../systems/chat')
const jumpscare = require('../systems/jumpscare')

let reconnecting = false

function startBot(updateStatus) {

  updateStatus("connecting")

  console.log("[BOT] Creating bot...")

  const bot = mineflayer.createBot(config)

  bot.once('spawn', () => {
    reconnecting = false

    updateStatus("online")
    console.log("[BOT] Joined server")

    movement.init(bot)
    combat.init(bot)
    follow.init(bot)
    chat.init(bot)
    jumpscare.init(bot)
  })

  bot.on('end', () => {
    console.log("[BOT] Disconnected")

    updateStatus("disconnected")

    if (reconnecting) return
    reconnecting = true

    console.log("[BOT] Reconnecting in 10 seconds...")

    setTimeout(() => {
      startBot(updateStatus)
    }, 10000)
  })

  bot.on('kicked', (reason) => {
    console.log("[KICKED]", reason)
  })

  bot.on('error', (err) => {
    console.log("[ERROR]", err.message)
  })

  bot.on('death', () => {
    console.log("[BOT] Died")
  })

  process.on('uncaughtException', (err) => {
    console.log("[CRASH]", err.message)
  })

  process.on('unhandledRejection', (err) => {
    console.log("[REJECTION]", err)
  })
}

module.exports = { startBot }
