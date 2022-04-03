let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let fail = `هذا الأمر لإعطاء الحد للآخرين المستخدمين\n\nمثال:\n${usedPrefix + command} @212641427490 10\ولا  الرد على رسالة دوي بالأمر: ${usedPrefix + command} 10`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    if (!who) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['212641427490@s.whatsapp.net'] } })
        throw false
    }
    if (typeof global.db.data.users[who] == "undefined") {
        global.db.data.users[who] = {
            النقاط: 0,
            الحدود: 10,
            آخر جائزة: 0,
            التسجيل: false,
            الاسم: conn.getName(m.sender),
            العمر: -1,
            تايم: -1,
            فهم: -1,
            سبب: '',
            ممنوع: false,
            لفل: 0,
            الاتصال: 0,
            الدور: 'المحارب  5',
            لفل تلقائي: false,
            حاسوب: 0,
        }
    }
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['212641427490@s.whatsapp.net'] } })
        throw false
    }
    if (isNaN(txt)) throw 'أرقام فقط'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'الحد الأدنى 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'الحد لا يكفي للنقل, هناك ضريبة أيضا'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} حد (Tax 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} حد`, who, m.text)
}
handler.help = ['paylimit @user <amount>']
handler.tags = ['xp']
handler.command = /^payl(imit)?$/

module.exports = handler
