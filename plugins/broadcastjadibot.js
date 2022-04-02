let handler = async (m, { conn, usedPrefix, text }) => {
  if (conn.user.jid !== global.conn.user.jid) throw false
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'قريب').map(conn => conn.user.jid)])]
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '*〔 Ammu إذاعة 〕*\n\n' + teks)
  for (let id of users) {
    await delay(1500)
    await conn.copyNForward(id, content, true)
  }
  conn.reply(m.chat, `_تم إرسال البث بنجاح إلى ${users.length} الرقم المراد بوت_
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g, '') + `?نص=${encodeURIComponent(usedPrefix)}menu`).join('\n')}
\nالتقدير الكامل ${users.length * 1.5} ثانيا`.trim(), m)
}
handler.help = ['broadcastjadibot', 'bcbot'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const delay = time => new Promise(res => setTimeout(res, time))
