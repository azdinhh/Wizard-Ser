module.exports = Object.assign(m => global.db.data.sticker ? m.reply(`
*قائمة التجزئة*

\`\`\`
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(Locked) ${key}` : key} : ${value.text}`).join('\n')}
\`\`\`
`.trim(), null, {
    contextInfo: {
        mentionedJid: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    }
}) : m.reply('🤷🏻‍♂️لم يكن هناك أي'), {
    help: ['cmd'].map(v => 'list' + v + ' <text>'),
    tags: ['database'],
    command: ['listcmd']
})
