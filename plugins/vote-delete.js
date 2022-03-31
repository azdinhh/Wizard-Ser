let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*لا يوجد تصويت في هذه المجموعة!*_`, '© Ammu', 'ابدأ التصويت', `${usedPrefix}بدء التصويت`)
        throw false
    }
    delete conn.vote[id]
    m.reply(`ينجح!`)

}
handler.help = ['deletevote']
handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
module.exports = handler
