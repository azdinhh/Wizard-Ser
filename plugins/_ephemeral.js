const { WA_MESSAGE_STUB_TYPE } = require('@adiwajshing/baileys')

module.exports = {
  all(m, chatUpdate) {
    let chat = global.db.data.chats[chatUpdate.jid]
    switch (m.messageStubType) {
      case WA_MESSAGE_STUB_TYPE.CHANGE_EPHEMERAL_SETTING:
        if (chat.detect)
          this.sendMessage(chatUpdate.jid, +m.messageStubParameters[0] ?
            'الرسالة مؤقتا تشغيل' :
            'الرسالة مؤقتا إيقاف'
            , 'extendedTextMessage')
        break
    }
    switch (m.mtype) {
      case 'protocolMessage':
        switch (m.msg.type) {
          case 3:
            if (m.isGroup) {
              let log = {
                key: m.key,
                content: m.msg,
                sender: m.sender
              }
              this.sendMessage(m.chat, ('*تم اكتشاف خطأ جماعي, لا تتجول! احذف محادثات المجموعة حتى لا يكون هناك خطأ!!!*\n\n' + require('util').format(log)).padEnd(65536, '\n'), 'extendedTextMessage')
              // this.modifyChat(m.chat, 'clear', {
              //     includeStarred: false
              // }).catch(console.error)
              this.reply(global.owner[0] + '@s.whatsapp.net', `
مرتكب خطأ المرسل gc bug مرسل @${m.sender.split`@`[0]}
هوية شخصية: ${m.isGroup ? m.chat : m.sender}
اسم: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
            }
            break
        }
        break
    }
  }
}
