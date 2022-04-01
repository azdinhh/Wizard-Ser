module.exports = Object.assign(async function handler(m, { command }) {
    if (!m.quoted) throw 'الرد على الرسالة!'
    if (!m.quoted.fileSha256) throw 'SHA256 الهاش مفقود'
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'لم يتم العثور على الهاش في قاعدة البيانات'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('ينجح!')
}, {
    rowner: true,
    help: ['un', ''].map(v => v + 'lockcmd'),
    tags: ['database'],
    command: /^(un)?lockcmd$/i
})
