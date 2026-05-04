let interval

function init(bot) {
  clearInterval(interval)

  interval = setInterval(() => {
    if (!bot.entity) return

    bot.setControlState('forward', true)
    setTimeout(() => bot.setControlState('forward', false), 700)
  }, 10000)
}

module.exports = { init }