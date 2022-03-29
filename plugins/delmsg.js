let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/del/i, '')
    if (!text) throw `use *${usedPrefix}list${which}* لرؤية القائمة`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' غير مسجل في قائمة الرسائل`
    delete msgs[text]
    m.reply(`تم حذف الرسالة بنجاح من قائمة الرسائل بالاسم '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
