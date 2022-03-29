let handler = async (m, { conn, participants, groupMetadata, text }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate, stiker } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')

        if (text) return m.reply(msToDate(expired - new Date() * 1))

        let caption = `*معلومة مجموعة*\n
*هوية شخصية:* 
${groupMetadata.id}

*اسم:* 
${groupMetadata.subject}

*وصف:* 
${groupMetadata.desc}

*إجمالي الأعضاء:*
${participants.length} Member

*صانع المجموعة:* 
@${m.chat.split`-`[0]}

*مجموعة المشرف:*
${listAdmin}

*إعدادات البوت:*
${antiLink ? '✅' : '❌'} مانع الارتباط
${global.db.data.chats[m.chat].حذف ? '❌' : '✅'} مضاد حذف
${isBanned ? '✅' : '❌'} محظور
${descUpdate ? '✅' : '❌'} وصف
${detect ? '✅' : '❌'} يكشف
${stiker ? '✅' : '❌'} ستيكر
${welcome ? '✅' : '❌'} أهلا بك

*إعدادات رسالة الروبوت:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}

*غادر:*
${msToDate(expired - new Date() * 1)}
`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', caption, m, 0, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " DAYS " + hours + " Hour " + minutes + " minute";
    // +minutes+":"+sec;
}
