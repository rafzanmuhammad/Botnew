var handler = async (m, {
	conn
}) => {
	var __timers = (new Date - global.db.data.users[m.sender].lastngojek)
	var _timers = (10800000 - __timers)
	var timers = clockString(_timers)
	var user = db.data.users[m.sender]
	var wm = global.wm

	if (user.stamina < 20) return m.reply('Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_')
	if (user.lastgrab > 10800000) throw m.reply('Kamu masih kelelahan untuk bekerja\nHarap tunggu ${timers} lagi untuk ngojek')

	var randomaku1 = `${Math.floor(Math.random() * 10)}`
	var randomaku2 = `${Math.floor(Math.random() * 10)}`
		.trim()

	var rbrb1 = (randomaku1 * 1000)
	var rbrb2 = (randomaku2 * 10)


	baba1 = `${rbrb1}`
	baba2 = `${rbrb2}`

	beni = `
πΆβ¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ       π΅


βοΈ Mendapatkan orderan....
`

	beni2 = `
πΆπ΅β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ       


β Mengantar ke tujuan....
`

	beni3 = `
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬π΅β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ       


β Sampai di tujuan....
`

	beni4 = `
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬π΅β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ πΆ  


β πΉMenerima gaji....
`

	hsl = `
*β[ Hasil Ngojek ]β*

 β πΉ Uang = [ ${baba1} ]
 β β¨ Exp = [ ${baba2} ] 		 

Stamina anda berkurang -20
`


	db.data.users[m.sender].money += rbrb1
	db.data.users[m.sender].exp += rbrb2
	db.data.users[m.sender].stamina -= stamina

	setTimeout(() => {
		m.reply(`${hsl}`)
	}, 30000)

	setTimeout(() => {
		m.reply(`${beni4}`)
	}, 25000)

	setTimeout(() => {
		m.reply(`${beni3}`)
	}, 20000)

	setTimeout(() => {
		m.reply(`${beni2}`)
	}, 15000)

	setTimeout(() => {
		m.reply(`${beni}`)
	}, 10000)

	setTimeout(() => {
		m.reply('πMencari pelanggan.....')
	}, 0)
	user.lastngojek = new Date * 1
}
handler.help = ['ojek']
handler.tags = ['rpg']
handler.command = /^(ojek|ngojek|gojek|jadiojek)$/i
handler.register = true
module.exports = handler

function clockString(ms) {
	var h = Math.floor(ms / 3600000)
	var m = Math.floor(ms / 60000) % 60
	var s = Math.floor(ms / 1000) % 60
	console.log({
		ms,
		h,
		m,
		s
	})
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
