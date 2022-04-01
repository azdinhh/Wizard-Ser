let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = /زامل|زبي|سكت اولد القحبة|نحويك|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|قود|زامل|pe?ler|xnxx|pron huh|سكس|go?blo?k|to?lo?l|نيكك|ng)e?nto?(t|d)|موك قحبة|اكبر قودا|dajj?al|هبط تقود(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.antiBadword && !chat.isBanned && isBadword) {
        user.warning += 1
        this.send2Button(m.chat, `*تم الكشف عن كلمات سيئة!*
تحذير: ${user.warning} / 5
إذا وصل التحذير إلى 5 ، فسيتم حظرك

اكتب *#on antibadword* لتشغيل antibadword
اكتب *#sorry* لتقليل التحذير

"لا تستخدم أبدًا كلمة كبيرة عندما تفعل كلمة قذرة صغيرة" (الــغـــࢪبــي).`, watermark, 'ثم بتشغيل Antibadword', ',1 antibadword',  'آسف', m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler
