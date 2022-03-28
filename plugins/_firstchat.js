let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}
${user.banned ? 'you are banned' : 'انا الــغـــࢪبــي,  ممنوع السبام/call/ask to save to this number. Can I help you?, Type .menu To Get Bot Menu}
`.trim(), watermark, user.banned ? 'Bot Owner' : 'Menu', user.banned ? '.owner' : '.?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Africa/Morocco').format('HH')
    res = "🌄صباح الخير"
    if (time >= 4) {
        res = "🌞صباح الخير"
    }
    if (time > 10) {
        res = "🌅طاب مسائك"
    }
    if (time >= 15) {
        res = "🌆مساء الخير"
    }
    if (time >= 18) {
        res = "🌌مساء الخير"
    }
    return res
}
