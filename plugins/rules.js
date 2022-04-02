let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 Rules 」
│ 🛂 *تم تطوير البوت من قبل الغربي*
│ ✅ *مكتمل*
│ 
│ *مشتغل* 🦅
└────
1. *ممنوع الاتصال دون سبب ضروري*
2. *ممنوع السبام*
3. *إذا واجهتك مشاكل قلي*
4. *عندك نصائح للتطوير البوت اهلا و سهلا*
 「 Consequences 」
1. If you violate rule number 5 (calling / vc) you will be blocked
2. If you violate the rules number 1, 2, 3 then you can get banned from bots
4. If you violate rule number 3 (insulting) then you will be picked up at your respective homes
`.trim()
    conn.fakeReply(m.chat, '*「 ⚠️ 」جار التحميل...*', '0@s.whatsapp.net', '*RULES*')
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://user-images.githubusercontent.com/102433984/160276111-32392546-2963-4d06-8721-462681d0bbbf.jpg")).buffer(), haruno, '© GHRBYB', 'ᴍᴇɴᴜ', '.menu', 'ᴏᴡɴᴇʀ', '.owner', m)
}
handler.tags = ['main']
handler.help = ['rules']
handler.command = /^(rule)$/i
module.exports = handler
