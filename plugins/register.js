const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `انت مسجل مسبقا\nتريد إعادة التسجيل? ${usedPrefix}unreg <رقم سري >`
  if (!Reg.test(text)) throw `Example:\n*${usedPrefix + command} name.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'لا يمكن أن يكون الاسم فارغًا(Alphanumeric)'
  if (!age) throw 'العمر لا يمكن أن يكون فارغا (Number)'
  age = parseInt(age)
  if (age > 70) throw 'العمر كبير جدا'
  if (age < 5) throw 'يمكن للأطفال الكتابة حسب التنسيق ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
  Register successful!

┌─〔 معلومات 〕
├ اسم: ${name}
├ سن: ${age} year
├ SN: ${sn}
└────

حفظ / تمييز هذه الرسالة بنجمة لأن SN (الرقم التسلسلي) يُستخدم لإعادة التسجيل
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

