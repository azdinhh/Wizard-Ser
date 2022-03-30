let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `اوه.. اين ال text?\n\مثال:\n${usedPrefix + command} هاي`
  let res = await fetch(global.API('pencarikode', '/api/simsimii', { text: encodeURIComponent(text) }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.result == 'أنا لا افهم ما تقول. ارجوك علمني.') await m.reply('لم يتم تدريس sim حتى الآن ، لذلك لا أعرف أن الرسالة المخصصة قيد التشغيل ، أخبر سيدي أن يعلمني..')
  await m.reply(`*Simi:* ${json.result}`)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

