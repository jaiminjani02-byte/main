let followInterval = null
let target = null

function init(bot) {
  bot.followPlayer = (name) => {
    const player = bot.players[name]?.entity
    if (!player) {
      bot.chat("I can't find you.")
      return
    }

    target = player
    bot.chat("I'm coming...")

    clearInterval(followInterval)

    followInterval = setInterval(() => {
      if (!target || !target.position) return

      const dist = bot.entity.position.distanceTo(target.position)

      if (dist > 3) {
        bot.lookAt(target.position)
        bot.setControlState('forward', true)
      } else {
        bot.setControlState('forward', false)
      }
    }, 2000)
  }

  bot.stopAll = () => {
    clearInterval(followInterval)
    target = null
    bot.setControlState('forward', false)
    bot.chat("I stopped.")
  }
}

module.exports = { init }