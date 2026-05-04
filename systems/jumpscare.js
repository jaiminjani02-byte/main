function init(bot) {
  setInterval(() => {
    const players = Object.values(bot.players)
      .map(p => p.entity)
      .filter(Boolean)

    if (!players.length) return
    if (Math.random() > 0.3) return

    const t = players[Math.floor(Math.random() * players.length)]

    console.log("[JUMPSCARE]")

    bot.lookAt(t.position)
    bot.chat("Don't turn around.")

    bot.setControlState('forward', true)
    setTimeout(() => bot.setControlState('forward', false), 800)

  }, 600000)
}

module.exports = { init }
