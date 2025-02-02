let handler = async (m, { conn, args }) => {
  let group = args[0] ? args[0] : m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'لا يمكن فتحه إلا في مجموعات'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw 'الكروب البيانات الوصفية غير محدد'
  if (!'participants' in groupMetadata) throw 'لم يتم تعريف المشاركين'
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw 'أنا لست في تلك المجموعة :/'
  if (me.isAdmin !== true) throw 'أنا لست مشرفًا '
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

