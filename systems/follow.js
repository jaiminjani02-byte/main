let interval = null

function init(bot) {
  bot.followPlayer = (name) => {
    const player = bot.players[name]?.entity
    if (!player) return bot.chat("I can't find you.")

    console.log("[FOLLOW] " + name)

    clearInterval(interval)
    interval = setInterval(() => {
      if (!player.position) return

      const dist = bot.entity.position.distanceTo(player.position)

      if (dist > 3) {
        bot.lookAt(player.position)
        bot.setControlState('forward', true)
      } else {
        bot.setControlState('forward', false)
      }
    }, 2000)
  }

  bot.stopAll = () => {
    clearInterval(interval)
    bot.setControlState('forward', false)
  }
}

module.exports = { init }
