let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  conn.mancing = conn.mancing ? conn.mancing : {}

  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.mancing[m.sender] != "undefined" && conn.mancing[m.sender] == true) return m.reply(`*لا يمكن السمك بعد الآن لأنك تنتظر السمكة للقبض على إخوانه*`)

  conn.mancing[m.sender] = true

  let wait = getRandom(1,5)
  let minute = wait * 1000 * 60
  m.reply("*كان يصطاد " + wait + " اللحظة*\n\n*يرجى نسخ والتحلي بالصبر أولا*")
  await delay(minute)

  let ikan = ['🐠','🐟','🐡','🐬','🐳','🐋','🦈','🦀','🐊']
  var randIkan = ikan[Math.floor(Math.random() * ikan.length)]
  randIkan2 = randIkan
  
  setTimeout(() => {
    if (randIkan2 == "🐠"){
      var jumlahIkan = getRandom(1,25)
      var hargaIkan = 10000
      var namaIkan = "سمكة المهرج"
    }else if (randIkan2 == "🐟"){
      var jumlahIkan = getRandom(1,13)
      var hargaIkan = 20000
      var namaIkan = "السمك الأزرق"
    }else if (randIkan2 == "🐡"){
      var jumlahIkan = getRandom(1,7)
      var hargaIkan = 40000
      var namaIkan = "سمكة منتفخة"
    }else if (randIkan2 == "🐬"){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "الدلافين"
    }else if (randIkan2 == "🐳"){		// < 5jt
      var jumlahIkan = getRandom(1,4)
      var hargaIkan = 70000
      var namaIkan = "حوت"
    }else if (randIkan2 == '🐋'){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "الحوت الأزرق"
    }else if (randIkan2 == "🦈"){
      var jumlahIkan = getRandom(1,5)
      var hargaIkan = 50000
      var namaIkan = "سمك القرش"
    }else if (randIkan2 == "🐊"){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "تمساح"
    }else if (randIkan2 == "🦀"){
      var jumlahIkan = getRandom(1,17)
      var hargaIkan = 15000
      var namaIkan = "سلطعون"
    }
    
    global.DATABASE._data.users[m.sender].money += hargaIkan * jumlahIkan
    conn.updatePresence(m.chat, Presence.composing)

    tampilanIkan = ""
    for (i=0;i<jumlahIkan;i++){
      tampilanIkan += randIkan + " "
    }

    conn.reply(m.chat, `*❏ FISHING MANIA*\n\nCatch : ${tampilanIkan}\nCongratulations you caught *${jumlahIkan} tail ${namaIkan}* with sales *Rp. ${Number(hargaIkan*jumlahIkan).toLocaleString()}*`, m)
    delete conn.mancing[m.sender]
  }, 1000)
}
handler.help = ['fishing']
handler.tags = ['game']
handler.command = /^(fishing)$/i
handler.limit = true
handler.exp = 0
module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
