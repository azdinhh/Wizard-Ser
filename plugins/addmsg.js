let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'الرد على الرسالة!'
    if (!text) throw `استعمال *${usedPrefix}list${which}* لرؤية القائمة`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' مسجلة في قائمة الرسائل`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`تمت إضافة الرسالة بنجاح في قائمة الرسائل كـ '${text}'
    
الوصول مع ${usedPrefix}احصل على${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker|gif)$/

module.exports = handler
