let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `إذا وجدت رسالة خطأ, أبلغ عن ذلك باستخدام هذا الأمر\n\nمثال:\n${usedPrefix + command} كيف حالك مطور, لقد وجدت خطأ مثل التالي <ينسخ/ضع علامة على رسالة الخطأ>`
    if (text.length < 10) throw `التقرير قصير جدًا ، ويتألف من 10 أحرف على الأقل!`
    if (text.length > 1000) throw `التقرير طويل جدًا ، بحد أقصى 1000 حرف!`
    let teks = `*${command.toUpperCase()}!*\n\nمن : *@${m.sender.split`@`[0]}*\n\nرسالة : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`تم إرسال الرسالة إلى مطور البوت, if ${command.toLowerCase()} شكرا على رسالتك ._`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
module.exports = handler
