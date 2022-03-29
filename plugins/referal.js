const crypto = require('crypto')

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'لا يمكن استخدام رمز الإحالة!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'رمز الإحالة غير صالح'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Safe!
+${xp_first_time} XP
`.trim())
    m.reply(`
Someone has used your referral code
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
احصل على ${xp_first_time} XP لأولئك الذين يستخدمون الرابط / رمز الإحالة أدناه

كود الإحالة: *${code}*

${command_link}
`.
    m.reply(`
احصل على ${xp_link_creator} XP لكل مستخدم جديد يستخدم رمز الإحالة الخاص بك
${users[m.sender].ref_count} استخدم الأشخاص رمز الإحالة الخاص بك

رمز الإحالة الخاص بك: ${code}

شارك الرابط مع الأصدقاء: ${command_link}

أو إرسال رسالة إلى friendwa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Person = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['fun']

handler.command = ['ref']

handler.register = true

module.exports = handler
