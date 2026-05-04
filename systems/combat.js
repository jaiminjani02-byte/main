let target = null
let interval = null

function init(bot) {
  bot.on('entityHurt', (entity) => {
    if (entity !== bot.entity) return

    const attacker = bot.nearestEntity(e =>
      e.type === 'player' &&
      e !== bot.entity &&
      e.position &&
      bot.entity.position.distanceTo(e.position) < 4
    )

    if (!attacker) return

    console.log("[COMBAT] Attacked")
    target = attacker

    clearInterval(interval)
    interval = setInterval(() => {
      if (!target || !target.position) return clearInterval(interval)

      const dist = bot.entity.position.distanceTo(target.position)
      if (dist <= 3) bot.attack(target)
    }, 2000)
  })
}

module.exports = { init }
