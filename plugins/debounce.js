let { spawn } = require('child_process');
let handler = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('إعادة ضبط الروبوت...\nالرجاء الانتظار حوالي 1 دقيقة')
    await global.db.write()
    process.send('reset')
  } else throw '_Ammu..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (لا يعمل)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

