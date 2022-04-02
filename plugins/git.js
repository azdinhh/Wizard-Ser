let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://user-images.githubusercontent.com/102433984/160849012-92c670c0-2619-4351-9b07-7683d46dc637.jpg")).buffer(), devil,:هناك 2 أنواع ، Free , Pro , النوع:Freeالنوع: Pro نوع Pro :ب2دولار\n\رابط\n\مجموعة\n\دعم\n\ \n\n\ https://chat.whatsapp.com/J3l0dV3vXFiJ8sRQcGgPZR \n\n\ ©إذا واجهتك مشاكل   *ارسل امر report. وقول مشكيلاتك*' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
