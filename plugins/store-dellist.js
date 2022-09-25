let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `gunakan *${usedPrefix}liststore* untuk melihat daftar pesan yg tersimpan.`
	let msgs = db.data.msgs
	if (!(text in msgs)) throw `*'${text}' Tidak Terdaftar Di Daftar Pesan.*`
	delete msgs[text]
	m.reply(`*✔️ Berhasil Menghapus Pesan Di Daftar List Dengan Nama '${text}'*`)
}
handler.help = ['list'].map(v => 'del' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^dellist$/i
handler.group = true
handler.admin = true
export default handler