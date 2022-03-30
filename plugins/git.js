let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://user-images.githubusercontent.com/102433984/160849012-92c670c0-2619-4351-9b07-7683d46dc637.jpg")).buffer(), devil, 'رابط مجموعة  يتم إضافة كل شهر بوتات\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://chat.whatsapp.com/CZjhxsXctdS1ItNxc60H2d \n\n\ ©*إذا واجهتك مشاكل قلي*  *https//wa.me/+212641427490*' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
