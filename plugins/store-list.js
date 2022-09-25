let handler = async (m, { conn, usedPrefix, command }) => {
	let msgs = db.data.msgs
	let msg = (Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })).map(v => v.nama)
	let row = Object.keys(msg).map(v => ({
		title: msg[v],
		description: '',
		rowId: msg[v]
	}))
	let button = {
		buttonText: 'LIST STORE',
		description: 'Berikut Daftar Menu Yang Ada Di List Store...',
		footerText: wm
	}
	if (msg[0]) return await conn.sendListM(m.chat, button, row, m)
	else throw `\n*[❗] Belum Ada Menu Yang Ada Di List Store.*\nKetik *${usedPrefix + command} <teks>* Untuk Menambahkan Daftar Menu.\n`
}
handler.help = ['list']
handler.tags = ['store']
handler.command = /^list$/i
handler.register = true
handler.limit = true
export default handler


/**
 * Jangan di hapus
 *
 * Buatan FokusDotId (Fokus ID)
 * https://github.com/fokusdotid
 *
 */