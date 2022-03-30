let handler = m => m

handler.before = function(m, { text }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender

    if (m.text > زامل*\n\nقحبة*\n\nقود*\n\nنحويك*\n\nزبي*\n\nتتناك*\n\nنحوي معك*\n\nمتقوبة) {
  this.reply(m.chat, '*「 إحترام قونين 」*\n\nمكتشف *${username}* أرسل رابط Virtex!\n\nآسف سوف يتم طردك من هذه المجموعة!', m)
     this.groupRemove(m.chat, [users])
  }
}
handler.group = true

module.exports = handler
