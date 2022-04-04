let limit = 30
let fetch = require('node-fetch')
const { servers, yt } = require('../lib/y2mate')

let handler = async (m, { itsu, args, isPrems, isOwner, usedPrefix, text }) => {
  if (!args || !args[0]) throw 'أوم ... urlnya مانا?'
  let chat = global.DATABASE.data.chats[m.chat]
  let quality = args[1] || '360'
  let server = (args[2] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yt(args[0], quality + 'p', 'mp4', quality, servers.includes(server) ? server : servers[0])
  
  let isLimit = (isPrems || isOwner ? 99 : limit) * 998888 < filesize
await itsu.relayWAMessage(itsu.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "لقب": `*لقب*: ${title}`,
                        "وصف": " \n_©الغربي ",
                        "زر كتابة": `Quality`,
                        "نوع القائمة": "SINGLE_SELECT",
                        "sections": [
                            { title: '『 جودة الفيديو』',
                                "rows": [
                                    {
                                        "title": `اوديو`, "description":  title,
                                        "rowId": `${usedPrefix}dlmsc ${args[0]}`
                                    }, {
                                       "لقب": `240p✅ , "description": title,
                                       "rowId": `${usedPrefix}dlvid ${args[0]} 240`
                                    }, {
                                       "لقب": `360p✅`,
"وصف": title, 
                                       "rowId": `${usedPrefix}dlvid ${args[0]} 360`
                                    }, {
                                       "لقب": `480p✅`,
"وصف": title, 
                                        "rowId": `${usedPrefix}dlvid ${args[0]} 480`
                                    }, {
                                        "لقب": `720p✅`,
"وصف": '```Sedang dalam perbaikan ❕```', 
                                        "rowId": `${usedPrefix}dlvid ${args[0]} 720`                               
                                    }, { 
                                        "لقب": `1080p✅`,
"وصف":  title, 
                                        "rowId": `${usedPrefix}dlvid ${args[0]} 1080`
                                    },{
"لقب": `Menu`,
"description": ``, 
                                       "rowId": `${usedPrefix} menu`}
                                ]
                            }
                        ]
                    }
                 }, {quoted: m}),{waitForAck: true}
)
}
handler.help = ['ytdl ']
handler.tags = ['downloader']
handler.command = /^ytdl$/i

handler.limit = true

module.exports = handler

async function shortUrl(url) {
  return await (await fetch('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url))).text()
}
