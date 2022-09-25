let handler = async (m, {
	conn,
	text,
	usedPrefix,
	command,
	participants
}) => {
	if (!text) {
		await conn.sendPresenceUpdate('composing', m.chat)
		conn.reply(m.chat, `*FORMAT SALAH*\nContoh:\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	}
	switch (text) {
		case "on":
		case "enable":
			let cek = global.db.data.chats[m.chat].reminder
			if (cek) return conn.reply(m.chat, `*Reminder Telah Aktif Pada Grup Ini.*`, m)
			await conn.sendPresenceUpdate('composing', m.chat)
			global.db.data.chats[m.chat].reminder = true
			conn.reply(m.chat, `*reminder berhasil diaktifkan.*`, m)
			break
		case "off":
		case "disable":
			let ce = global.db.data.chats[m.chat].reminder
			if (!ce) return conn.reply(m.chat, `*Reminder Belum Aktif Pada Grup Ini.*`, m)
			await conn.sendPresenceUpdate('composing', m.chat)
			global.db.data.chats[m.chat].reminder = false
			conn.reply(m.chat, `*reminder berhasil dimatikan.*`, m)
			break
		default:
			await conn.sendPresenceUpdate('composing', m.chat)
			conn.reply(m.chat, `*FORMAT SALAH*\nContoh:\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
			break
	}
}
handler.help = ['reminder'].map(v => v + ' [on/off]')
handler.tags = ['group']
handler.command = /^(reminder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler