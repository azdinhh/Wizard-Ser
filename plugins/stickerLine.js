const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `أوم .. أين عنوان url?\n\nمثال:\n${usedPrefix + command} https://store.line.me/stickershop/product/`
    if (!args[0].match(/(https:\/\/store.line.me\/stickershop\/product\/.*)/gi)) throw `الــغـــࢪبــي`

    let res = await fetch(global.API('zeks', '/api/linesticker', { link: args[0] }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let hasil = json.sticker.map((v, i) => `${i + 1}. ${v}`).join('\n')
    m.reply(`*${json.title}*
*يقدر الاكتمال:* ${json.sticker.length * 1.5} ثانيا
    `.trim())

    for (let i of json.sticker) {
        stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendMessage(m.chat, stiker, MessageType.sticker)
        await delay(1500)
    }
    m.reply('_*تم الانتهاء من*_')

}
handler.help = ['stikerline <url>']
handler.tags = ['sticker']
handler.command = /^(sticic?kerline)$/i

handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
