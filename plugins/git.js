let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://user-images.githubusercontent.com/102433984/161603454-d933510e-7d5d-4f69-8239-54d701f737f1.gif")).buffer(), devil, 'هناك 2 أنواع ، Free , Pro , النوع:\n\Freeالنوع: \n\ Pro نوع\n\Pro :\n\ب2دولار \n\n\ رابط مجموعة دعم https://chat.whatsapp.com/J3l0dV3vXFiJ8sRQcGgPZR   إذا واجهتك مشاكل رسل امر report. وقول مشكيلاتك \n\n\ ©الــغـــࢪبــي ' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
