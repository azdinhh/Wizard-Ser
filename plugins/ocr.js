
const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')

let handler = async (m, { usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `هذه هي النقطة لأخذ النص المرسوم ، وإرسال / الرد على الصورة بالأمر ${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `ميم ${mime} غير مدعوم!`
    let img = await q.download()
    let url = await uploadImage(img)
    let res = await fetch(global.API('jonaz', '/ocr', { url }, ''))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.resultadoOCR) throw json
    m.reply(json.resultadoOCR)
}
handler.help = ['ocr']
handler.tags = ['convert']
handler.command = /^ocr$/i

handler.limit = true

module.exports = handler
