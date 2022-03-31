let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        await conn.sendButton(m.chat, '_لا تزال هناك أصوات في هذه الدردشة!_', '© الــغـــࢪبــي', 'حذف التصويت', `${usedPrefix}حذف الحضور`)
        throw false
    }
    await conn.send2Button(m.chat, `يبدأ التصويت!
*${usedPrefix}تصويت مؤيِّد* - بالتأكيد
*${usedPrefix}تكريس* - لا
*${usedPrefix}التصويت* - للتحقق من التصويت
*${usedPrefix}حذف الحضور* - لحذف الأصوات`, '© الــغـــࢪبــي', 'التصويت', `${usedPrefix}تصويت مؤيِّد`, 'ديفو', `${usedPrefix}تكريس`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['startvote [reason]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
