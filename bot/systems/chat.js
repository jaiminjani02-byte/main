let lastReply = 0

function init(bot) {
  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (!message) return

    const now = Date.now()
    if (now - lastReply < 5000) return

    const msg = message.toLowerCase()

    if (msg.startsWith('!follow')) {
      const name = message.split(' ')[1]
      if (name) bot.followPlayer(name)
      return
    }

    if (msg === '!stop') {
      bot.stopAll()
      return
    }

    if (msg.includes('hi') || msg.includes('hello')) {
      bot.chat("I've been watching you.")
    } else if (msg.includes('where')) {
      bot.chat("Closer than you think.")
    } else if (msg.includes('who')) {
      bot.chat("You already know.")
    } else if (msg.includes('herobrine')) {
      bot.chat("I see everything.")
    }

    lastReply = now
  })
}

module.exports = { init }