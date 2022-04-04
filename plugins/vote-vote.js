let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*لا يوجد تصويت في هذه المجموعة!*_`, '© الــغـــࢪبــي', 'START VOTE', `${usedPrefix}بدء التصويت`)
        throw false
    }
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'You have voted!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let caption = `
    〔 VOTE 〕
*سبب:* ${reason}
*التصويت*
__المجموع: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}
*ديفو*
_المجموع: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}
_بواسطة الــغـــࢪبــي_
    `.trim()
    await conn.send2Button(m.chat, caption, '© الــغـــࢪبــي', 'UPVOTE', `${usedPrefix}تصويت مؤيِّد`, 'DEVOTE', `${usedPrefix}تكريس`, { contextInfo: { mentionedJid } })
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i
handler.group = true
module.exports = handler
