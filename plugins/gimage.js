let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `اه .. ما الذي تبحث عنه?\n\مثال:\n${usedPrefix + command} أرض`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 غير موجود'
  conn.sendFile(m.chat, url, 'img', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['gimage <search>', 'image <search>','img <search>']
handler.tags = ['internet']
handler.command = /^(g?image|img)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random(5) * arr.length)]
}
