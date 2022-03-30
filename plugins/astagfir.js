let handler = async (m) => {
    let user = db.data.users[m.sender]
    if (user.warning == 0) throw 'لديك تحذير فريد!'

    let waktu = user.lastIstigfar + 180000
    if (new Date - user.lastIstigfar < 180000) throw `يمكنك استخدام هذا الأمر مرة أخرى بعد ${msToTime(waktu - new Date())}`
    user.warning -= 1
    m.reply(`Warning: ${user.warning} / 5`)
    user.lastIstigfar = new Date * 1
}
handler.command = /^(astagh?fir(ullah)?|sorry)$/i

handler.limit = true

module.exports = handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        ثواني = Math.floor((duration / 1000) % 60),
        الدقائق = Math.floor((duration / (1000 * 60)) % 60),
        ساعات = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (ساعات < 10) ? "0" + ساعات : ساعات
    minutes = (الدقائق < 10) ? "0" + الدقائق : الدقائق
    seconds = (ثواني < 10) ? "0" + ثواني : ثواني

    return minutes + " اللحظة " + ثواني + " ثانيا"
}
