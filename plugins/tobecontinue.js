const { createCanvas, loadImage } = require('canvas');
const path = require('طريق');

let handler = async (m, { conn }) => {
  console.log("مسمى");
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  const base = انتظار تحميل الصورة("https://raw.githubusercontent.com/bot-clones/xiao/master/assets/images/to-be-continued.png");
  console.log(base);
  const data =انتظار تحميل الصورة(await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'));
  console.log("اصنع كود")
  const canvas = createCanvas(data.width, data.height);
  const ctx = canvas.getContext('2d');
  drawImageWithTint(ctx, data, '#704214', 0, 0, data.width, data.height);
  const ratio = base.width / base.height;
  const width = canvas.width / 2;
  console.log("اصنع كود");
  const height = Math.round(width / ratio);
  ctx.drawImage(base, 0, canvas.height - height, width, height);
  const attachment = canvas.toBuffer();
  conn.sendFile(m.chat, attachment, 'أن-تكون-استمر.png', '© الــغـــࢪبــي', m, 0, { thumbnail: attachment })
}

handler.help = ['tbc @<user>']
handler.tags = ['internet']
handler.command = /^(tobecontinue|tbc)$/i
handler.limit = true

module.exports = handler
