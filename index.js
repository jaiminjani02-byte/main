// 🧠 bot status tracker
let botStatus = "starting..."

// 🌐 dummy server for Render (keeps service alive)
require('http').createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`Herobrine status: ${botStatus}`)
}).listen(process.env.PORT || 3000, () => {
  console.log('[WEB] Status server running')
})

// 🧾 simple logger
function log(msg) {
  console.log(`[${new Date().toLocaleTimeString()}] ${msg}`)
}

// 🤖 import bot
const { createHerobrine } = require('./core/bot')

// 🚀 start bot with status updates
log('Starting Herobrine...')
createHerobrine((status) => {
  botStatus = status
  log(`Status: ${status}`)
})
