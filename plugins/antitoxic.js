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
handler.customPrefix = /زبي|قود|قحبة|ولد القحبة|متقوبة|نحويك|نيكك|سكس|poor/i
handler.command = new RegExp

module.exports = handler
