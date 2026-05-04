function init(bot) {
  setInterval(() => {
    if (!bot.entity) return

    const players = Object.values(bot.players)
      .map(p => p.entity)
      .filter(e => e && e.position)

    if (players.length === 0) return

    const target = players[Math.floor(Math.random() * players.length)]

    // low chance trigger
    if (Math.random() > 0.25) return

    // face instantly (creepy snap)
    bot.lookAt(target.position)

    // message
    bot.chat("Don't turn around.")

    // short forward burst
    bot.setControlState('forward', true)
    setTimeout(() => bot.setControlState('forward', false), 900)

  }, 600000) // every 10 mins
}

module.exports = { init }