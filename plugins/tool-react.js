let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix}) => {
	
	if (!m.quoted) throw '*[❗] Format Salah, Perintah Ini Untuk Mereact Pesan*\n\n*Example: ${usedPrefix}react 👤*'
	if (text.length > 2) throw '*[❗] Maksimal 1 Emoji*'
	if (!text) throw `*[❗] Format Salah, Perintah Ini Untuk Mereact Pesan*\n\n*Example: ${usedPrefix}react 👤*'
conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
 handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(react)$/i
handler.register = true
handler.limit = true
export default handler