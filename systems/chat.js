let last = 0

function init(bot) {
  bot.on('chat', (u, m) => {
    if (u === bot.username) return

    console.log(`[CHAT] ${u}: ${m}`)

    const now = Date.now()
    if (now - last < 5000) return

    const msg = m.toLowerCase()

    if (msg.startsWith('!follow')) {
      const name = m.split(' ')[1]
      if (name) bot.followPlayer(name)
      return
    }

    if (msg === '!stop') {
      bot.stopAll()
      return
    }

    if (msg.includes('hi')) bot.chat("I've been watching you.")
    else if (msg.includes('where')) bot.chat("Behind you.")
    else if (msg.includes('herobrine')) bot.chat("I see everything.")

    last = now
  })
}

module.exports = { init }
