import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!text) throw '*Masukkan link*\n Example: https://www.dailymotion.com/video/x6dmhc9'
let res = await axios('https://violetics.pw/api/downloader/dailymotion?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ǫᴜᴀʟɪᴛʏ: ' + v.quality,
		description: '\n⌚ ɪᴅ: ' + json.result.id + '\n⏲️ ᴛɪᴛʟᴇ: ' + json.result.meta.title + '\n📎 ᴜʀʟ: ' + v.url + '\n📌 sᴏᴜʀᴄᴇ: ' + json.result.meta.source + '\n👁️ ᴠɪᴇᴡs: ' + json.result.meta.duration + '\n📌 sᴅ: ' + json.result.sd.url + '\n\n📌 ʜᴅ: ' + json.result.hd.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['dailymotion'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(dm|dailymotion)?$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler