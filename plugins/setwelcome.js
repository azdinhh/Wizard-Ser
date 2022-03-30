let handler = async (m, { conn, text, isROwner, isOwner, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('مجموعة الترحيب بنجاح\n@user (Mention)\n@موضوعات (عنوان جروب)\n@desc (وصف جروب)')
  } else throw `آه .. أين النص?\n\nمثال:\n${usedPrefix + command} welcome @user مجموعة @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

