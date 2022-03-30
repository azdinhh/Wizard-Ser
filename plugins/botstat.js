let handler = async (m, { conn }) => {
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    m.reply(`
┌─〔 Status 〕
├ *${groups.length}* Group
├ *${chats.length - groups.length}* دردشة خاصة
├ *${Object.keys(global.db.data.users).length}* المستخدمون
├ *${conn.blocklist.length}* Blocked
├ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* الدردشة المحظورة
├ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* مستخدم محظور
└────
    `.trim())
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
