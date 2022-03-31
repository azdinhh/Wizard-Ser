// Thanks to TOXIC-DEVIL
// https://github.com/TOXIC-DEVIL

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args || !args[0] || args.length === 0) throw `أوم .. أي رقم?\n\nمثال:\n${usedPrefix + command} 21241427490`
    if (args[0].startsWith('0')) throw 'Use Country code!'
    let user = await conn.isOnWhatsApp(args[0])
    let exists = user && user.exists ? true : false
    if (exists) {
        let sameGroup = [], isInDatabase = false
        let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
        for (let gc of chat) {
            let participants = gc && gc.metadata && gc.metadata.participants ? gc.metadata.participants : []
            if (participants.some(v => v.jid === user.jid)) sameGroup.push(gc.jid)
        }
        if (user.jid in global.db.data.users) isInDatabase = true
        let str = ` 
*اسم:* ${conn.getName(user.jid)}
*رقم:* ${splitM(user.jid)}
*أشير:* ${toM(user.jid)}
*Api:* wa.me/${splitM(user.jid)}
*Jid:* ${user.jid}
*واتساب اعمال:* ${user.isBusiness ? 'نعم' : 'لا'}
*Di Database:* ${isInDatabase ? 'نعم : 'لا'}
*نفس المجموعة مع بوت:* ${sameGroup.length} *مجموعة*
`.trim()
        m.reply(str, m.chat, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
    } else throw 'رقم غير مسجل'
}

handler.help = ['scan'].map(v => v + ' [number]')
handler.tags = ['tools']
handler.command = /^scan$/i

module.exports = handler

function splitM(jid) {
    return jid.split('@')[0]
}

function toM(jid) {
    return '@' + splitM(jid)
}
