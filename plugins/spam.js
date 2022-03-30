let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw 'الرجاء إدخال الرقم الذي سيتم إرسال بريد عشوائي إليه'
if (!pesan) throw 'الرجاء إدخال الرسالة المراد إرسالها
if (jumlah && isNaN(jumlah)) throw 'يجب أن يكون المبلغ رقمًا!'

  let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
  let fixedJumlah = jumlah ? jumlah * 1 : 10
  if (fixedJumlah > 100) throw 'Too much quantity!'
  await m.reply(`[!] تم بنجاح إرسال رسائل الواتساب العشوائية إلى${nomor} بقدر ${fixedJumlah} زمن!`)
  for (let i = fixedJumlah; i > 1; i--) {
  if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
  }
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['premium']
handler.command = /^spam(wa)?$/i

handler.group = true
handler.premium = true

module.exports = handler
