let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    let img = 'https://telegra.ph/file/b29dffd131e4c521c8be.jpg'
    if (!args[0]) conn.sendFile(m.chat, 'https://user-images.githubusercontent.com/102433984/161431650-70eabcab-b9b3-4a7e-90b0-7ac30bfccea3.jpg', '', `الرجاء إدخال الوجهة واسم الملف\nمثال: ${ usedPrefix + command } الإضافات/join.js`, m)
    require('fs').writeFileSync(`./${args[0]}`, m.quoted.text)
    conn.sendButtonImg(m.chat, await(await fetch(img)).buffer(), `تم الحفظ بنجاح باسم ${args[0]}`, watermark, 'MENU', '.?', m)
}
handler.command = /^write$/i
handler.owner = true
module.exports = handler
