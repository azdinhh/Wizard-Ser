let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*لا يوجد تصويت في هذه المجموعة!*_`, '© Ammu', 'START VOTE', `${usedPrefix}startvote`)
        throw false
    }

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let caption = `
    〔 تصويت 〕
*سبب:* ${reason}
*التصويت*
_المجموع: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}
*ديفو*
_المجموع: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}
_بواسطة الــغـــࢪبــي_
    `.trim()
    await conn.send3Button(m.chat, caption, '© الــغـــࢪبــي', 'UPVOTE', `${usedPrefix}تصويت مؤيِّد`, 'DEVOTE', `${usedPrefix}تكريس`, 'DELETE VOTE', `${usedPrefix}حذف الحضور`, { contextInfo: { mentionedJid } })
}
handler.help = ['checkvote']
handler.tags = ['vote']
handler.command = /^checkvote$/i
handler.group = true
module.exports = handler
