let botStatus = "starting..."

require('http').createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`Herobrine status: ${botStatus}`)
}).listen(process.env.PORT || 3000, () => {
  console.log('[WEB] Status server running')
})

function log(msg) {
  console.log(`[${new Date().toLocaleTimeString()}] ${msg}`)
}

const { startBot } = require('./core/bot')

log('Starting Herobrine...')

startBot((status) => {
  botStatus = status
  log(`Status: ${status}`)
})
