// delay using async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// safe interval (prevents stacking)
function createSafeInterval(fn, time) {
  let running = false

  return setInterval(async () => {
    if (running) return
    running = true

    try {
      await fn()
    } catch (err) {
      console.log('Interval error:', err)
    }

    running = false
  }, time)
}

// random number in range
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = {
  delay,
  createSafeInterval,
  random
}