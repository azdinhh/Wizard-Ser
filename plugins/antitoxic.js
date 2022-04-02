let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 مضاد سب 」*
مرسل : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
رسالة : ${m.text}
اعتد عليه ، لا تسب احد سيتم اطرك! :)
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /يابن المتناكه|كس امك|كسختك|كسمك|يكسمك|ابن الشرموطة|نيكك|سكس|طبون|متقوبة|نحويك|نيكك|متقوبة|نحويك|نيكك/i
handler.command = new RegExp

module.exports = handler
