require('http').createServer((req, res) => {
  res.end('Herobrine is watching...')
}).listen(process.env.PORT || 3000)

const { createHerobrine } = require('./core/bot')

createHerobrine()
