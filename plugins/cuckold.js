let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cuckold?APIKEY=c81b3345e477a0c7', '', 'الــغـــࢪبــي', m)
}
handler.help = ['ntr']
handler.tags = ['nsfw']
handler.command = /^(ntr)$/i

handler.limit = true
handler.group = true
handler.premium = true

module.exports = handler
