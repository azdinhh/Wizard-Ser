let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    let img = 'https://telegra.ph/file/b29dffd131e4c521c8be.jpg'
    if (!args[0]) conn.sendFile(m.chat, 'https://user-images.githubusercontent.com/102433984/161603010-d6a695a9-d9a1-4f9e-9661-e15d1e412fa9.gif', '', `الرجاء إدخال الوجهة واسم الملف\nمثال: ${ usedPrefix + command } الإضافات/join.js`, m)
    require('fs').writeFileSync(`./${args[0]}`, m.quoted.text)
    conn.sendButtonImg(m.chat, await(await fetch(img)).buffer(), `تم الحفظ بنجاح باسم ${args[0]}`, watermark, 'MENU', '.?', m)
}
handler.command = /^write$/i
handler.owner = true
module.exports = handler
