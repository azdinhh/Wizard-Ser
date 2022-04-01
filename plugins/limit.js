let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* حد\n*${user.exp}* XP\nمستوى *${user.level}*\nدور *${user.role}*`)
}
handler.help = ['my [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
module.exports = handler
