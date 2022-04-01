let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'لا'
  if (isAdmin) throw 'على الرغم من أنني بالفعل مشرف'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
