const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `balas pesan dengan perintah *${usedPrefix + command}*`;
	if (!text) throw `penggunaan: ${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} DM FF`;
	let msgs = db.data.msgs
	if (text in msgs) throw `*'${text}' Telah Terdaftar Di Data List*`
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	m.reply(`*✔️ Berhasil Menambahkan ${text} Ke List*\n\nAkses Dengan Mengetik Namanya`.trim())
}
handler.help = ['list'].map(v => 'add' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^addlist$/i
handler.premium = true
handler.owner = true


export default handler