const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command, usedPrefix }) {
    if (!global.db.data.settings.anon) throw `هذه الميزة غير نشطة`
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'التالي':
        case 'غادر': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                await this.sendButton(m.chat, '_أنت لست في محادثة مجهولة_', watermark, 'ابحث عن شريك', `${usedPrefix}start`)
                throw false
            }
            m.reply('_نعم_')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_غادر الشريك الدردشة_', watermark, 'ابحث عن شريك', `${usedPrefix}start`)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, '_أنت لا تزال في محادثة مجهولة ، تنتظر شريكًا', watermark, 'الخروج', `${usedPrefix}leave`)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'انتظار' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, '_تم العثور على الشريك!_', watermark, 'التالي', `${usedPrefix}next`)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.b, '_تم العثور على الشريك_', watermark, 'التالي', `${usedPrefix}next`)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'انتظار',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, 'شريك في الانتظار..._', watermark, 'الخروج', `${usedPrefix}leave`)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler
