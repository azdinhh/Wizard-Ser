let fetch = require('node-fetch')
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/ephoto')))).json()
  if (!effect) throw '*تأثير القائمة*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `تأثير *${effect}* لم يتم العثور على`
  let [text, text2, ...text3] = txt.replace(effect, '').trimStart().split(split)
  text3 = text3.join(split)
  let url = global.API('xteam', '/ephoto/' + effect, { text, text2, text3 }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'ephoto.jpg', `*ENPHOTO360*\n*Efek:* ${effect}`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['enphoto'].map(v => v + ' <effect> <text>|[text2]|[text3]')
handler.tags = ['tools']
handler.command = /^(en?photo(360)?)$/i

module.exports = handler

