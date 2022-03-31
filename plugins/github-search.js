let fetch = require('node-fetch')
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `مثال:\n${usedPrefix + command} Eva`
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_تم إنشاؤها على *${formatDate(repo.created_at)}*_
_آخر تحديث بتاريخ *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*وصف:*\n${repo.description}` : ''}
*استنساخ:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
    m.reply(str)
}
handler.help = ['githubsearch'].map(v => v + ' <search>')
handler.tags = ['tools']

handler.command = /^g(ithub|h)search$/i

module.exports = handler

function formatDate(n, locale = 'en') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
