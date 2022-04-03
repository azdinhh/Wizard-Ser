const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, text }) => {
  let stiker = false
  try {
    let [packname, ...author] = text.split`|`
    author = (author || []).join`|`
    let q = m.quoted ? m.quoted : m
    let mime = m.quoted.mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      let out = await webp2png(img)
      if (!img) throw `الرد ملصقا مع الأمر ${usedPrefix + command} <اسم الحزمة>|<مؤلف>`
      stiker = await sticker(0, out, packname || '', author || '')
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      if (!img) throw `الرد على الصورة مع الأمر ${usedPrefix + command} <اسم الحزمة>|<مؤلف>`
      stiker = await sticker(0, link, packname || '', author || '')
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) throw '10 ثوان كحد أقصى!'
      let img = await q.download()
      let link = await uploadFile(img)
      if (!img) throw `الرد على الفيديو مع الأمر ${usedPrefix + command} <اسم الحزمة>|<مؤلف>`
      stiker = await sticker(0, link, packname || '', author || '')
    }
  } finally {
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'الرد على الملصق!'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i

handler.limit = true

module.exports = handler
