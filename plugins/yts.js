let yts = require('yt-search')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `مثال:\n${usedPrefix + command} Rosses`
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
مدة: ${v.timestamp}
تم الرفع ${v.ago}
${v.views} Viewer
      `.trim()
      case 'قناة': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <query>')
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
