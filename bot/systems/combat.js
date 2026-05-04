let attackInterval = null
let currentTarget = null

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

    startAttack(bot, attacker)
  })
}

function startAttack(bot, target) {
  if (currentTarget === target) return

  stopAttack()
  currentTarget = target

  bot.chat("You shouldn't have done that.")

  attackInterval = setInterval(() => {
    if (!target || !target.position) return stopAttack()

    const dist = bot.entity.position.distanceTo(target.position)

    if (dist <= 3) {
      try { bot.attack(target) } catch {}
    }
  }, 2000)
}

function stopAttack() {
  clearInterval(attackInterval)
  attackInterval = null
  currentTarget = null
}

module.exports = { init }