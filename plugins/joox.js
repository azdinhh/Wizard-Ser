const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `اه .. ما هو العنوان?\n\nمثال:\n${usedPrefix + command} lferda`
    if (isUrl(text)) throw `اه .. لقبك لا يستخدم رابط\n\nمثال:\n${usedPrefix + command} sad boy`

    let res = await fetch(global.API('codefinder', '/download/joox', { search: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { judul, artist, album, img_url, mp3_url, filesize, duration } = json.result
    let pesan = `
لقب: ${judul}
فنان: ${artist}
البوم: ${album}
حجم الملف: ${filesize}
مدة: ${duration}

© الــغـــࢪبــي
    `.trim()

    conn.sendFile(m.chat, img_url, 'eror.jpg', pesan, m, 0, { thumbnail: await (await fetch(img_url)).buffer() })
    conn.sendFile(m.chat, mp3_url, 'error.mp3', '', m, 0, { asDocument: global.db.data.chats[m.chat].useDocument, mimetype: 'audio/mp4' })

}
handler.help = ['joox'].map(v => v + ' <title>')
handler.tags = ['downloader']
handler.command = /^joox$/i

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
