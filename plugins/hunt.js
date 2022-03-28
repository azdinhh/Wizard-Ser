let handler = async (m, { conn, text }) => {

	let monsters = [
		{ area: 1, اسم: "عفريت" },
		{ area: 1, اسم: "الوحل" },
		{ area: 1, اسم: "ذئب" },
		{ area: 2, اسم: "حورية" },
		{ area: 2, اسم: "هيكل عظمي" },
		{ area: 2, اسم: "ذئب" },
		{ area: 3, اسم: "طفل شيطان" },
		{ area: 3, اسم: "شبح" },
		{ area: 3, اسم: "زومبي" },
		{ area: 4, اسم: "عفريت" },
		{ area: 4, اسم: "ساحرة" },
		{ area: 4, اسم: "زومبي" },
		{ area: 5, اسم: "الغول" },
		{ area: 5, اسم: "العقرب العملاق" },
		{ area: 5, اسم: "وحيد القرن" },
		{ area: 6, اسم: "طفل روبوت" },
		{ area: 6, اسم: "ساحر" },
		{ area: 6, اسم: "وحيد القرن" },
		{ area: 7, اسم: "سيسيليا" },
		{ area: 7, اسم: "العملاق البيرانا" },
		{ area: 7, اسم: "حورية البحر" },
		{ area: 8, اسم: "التمساح العملاق" },
		{ area: 8, اسم: "نيريد" },
		{ area: 8, اسم: "حورية البحر" },
		{ area: 9, اسم: "شيطان" },
		{ area: 9, اسم: "هاربي" },
		{ area: 9, اسم: "الروبوت القاتل" },
		{ area: 10, اسم: "دلهان" },
		{ area: 10, اسم: "مانتيكور" },
		{ area: 10, اسم: "الروبوت القاتل" },
		{ area: 11, اسم: "التنين الصغير" },
		{ area: 11, اسم: "التنين الصغير" },
		{ area: 11, اسم: "تنين صغير الحجم" },
		{ area: 12, اسم: "طفل التنين" },
		{ area: 12, اسم: "ليس صغير التنين" },
		{ area: 12, اسم: "طفل التنين تحجيم" },
		{ area: 13, اسم: "بالتأكيد ليس التنين الصغير جدًا" },
		{ area: 13, اسم: "التنين التين" },
		{ area: 13, اسم: "التنين التين تحجيم" },
	]
	let player = global.DATABASE.data.users[m.sender]
	let pname = conn.getName(m.sender)

	let cdm = `${MeNit(new Date - player.Thunt)}`
	let cds = `${DeTik(new Date - player.Thunt)}`
	let cd1 = Math.ceil(01 - cdm)
	let cd2 = Math.ceil(60 - cds)

	let area_monsters = monsters.filter(monster => { return monster.area === player.area })
	let monster = area_monsters[Math.floor(Math.random() * area_monsters.length)]
	let monsterName = monster.name.toUpperCase()

	if (new Date - global.DATABASE._data.users[m.sender].lasthunt > 120000) {
		let coins = parseInt(Math.floor(Math.random() * 401))
		let exp = parseInt(Math.floor(Math.random() * 601))
		let sum = 82 * player.area - 59
		let dmg = (player.sword  * 5 + player.armor * 5 - sum)
		dmg = dmg < 0 ? Math.abs(dmg) : 0

		player.healt -= dmg
		player.lasthunt = new Date * 1 // waktu hunt 2menit

		if (player.healt < 0) {
			let msg = `*${pname}* أنت تموت بقتلك ${monsterName}`
			if (player.level > 0) {
				player.level -= 1
				msg += `\ينخفض ​​المستوى 1 للموت أثناء الصيد!`
			}
			player.healt = 100
			m.reply(msg)
			return
		}

		player.limit += حد * 1
		player.exp += إكسب * 1

		let pesan = `*${pname}* البحث والقتل *${monsterName}*\nGet ${new Intl.NumberFormat('en-US').format(coins)} coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nDecreased -${dmg}Hp, Remaining ${player.healt}/${100}`
		m.reply(pesan)
	} else throw `انتظر *00:${cd1}:${cd2}* للصيد مرة أخرى`
}

handler.help = ['hunt']
handler.tags = ['game']
handler.command = /^hunt/i

handler.group = true

handler.fail = null

module.exports = handler

function MeNit(ms) {
	let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
	return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function DeTik(ms) {
	let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
	return [s].map(v => v.toString().padStart(2, 0)).join(':')
}
