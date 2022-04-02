let handler = m => m
handler.before = async function (m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/(تقرير|طلب)!/i.test(m.quoted.text)) return !0
    if (!isOwner) throw false
    conn.fakeReply(m.quoted.mentionedJid[0], '*Owner:* ' + m.text, m.quoted.mentionedJid[0], `${m.quoted.text.split`رسالة :`[1]}`)

}
module.exports = handler
