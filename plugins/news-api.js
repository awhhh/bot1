import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Naruto`
  
  if (command == 'newsapi') {
let f = await fetch(`https://newsapi.org/v2/top-headlines?country=${text}&apiKey=916be7f6341f4cd3991d4c3937707d30`)
let xx = await f.json()
let dapet = xx.articles
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\n*ᴀᴜᴛʜᴏʀ:* ' + v.author + '\n*sᴏᴜʀᴄᴇ:*' + v.source.name + '\n*ᴅᴇsᴄ:* ' + v.description + '\n*ʟɪɴᴋ:* ' + v.url + '\n*ᴛʜᴜᴍʙ:* ' + v.urlToImage + '\n*ᴘᴜʙʟɪsʜᴇᴅ:* ' + v.publishedAt,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `𝗦𝗲𝗹𝗲𝗰𝘁 𝗡𝗲𝘄𝘀 𝗢𝗽𝘁𝗶𝗼𝗻𝘀`,
		description: `*Silahkan Pilih Opsi Berita Dibawah...*`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'newsapi2') {
if (!args[0]) throw `Contoh:
${usedPrefix + command} category
*List:*
• antara
• bbc
• cnbc
• cnn
• daily
• detik
• fajar
• idn
• indozone
• inews
• kompas
• kontan
• liputan6
• merdeka
• metro
• okezone
• republika
• sindo
• tempo
• tribun
• viva`
let f = await fetch(`https://dhn-api.herokuapp.com/api/news/${text}?apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\n*ɴᴇᴡs:* ' + v.berita,
		rowId: usedPrefix + 'ss ' + v.berita_url
	}))
	let button = {
		buttonText: `𝗦𝗲𝗹𝗲𝗰𝘁 𝗡𝗲𝘄𝘀 𝗢𝗽𝘁𝗶𝗼𝗻𝘀`,
		description: `*Silahkan Pilih Opsi Berita Dibawah...*`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'news') {
if (!args[0]) throw `Contoh:
${usedPrefix + command} category
*List:*
• antara
• bbc
• cnbc
• cnn
• daily
• detik
• fajar
• idn
• indozone
• inews
• kompas
• kontan
• liputan6
• merdeka
• metro
• okezone
• republika
• sindo
• tempo
• tribun
• viva`
let res = await axios('https://violetics.pw/api/news/' + args[0] + '?apikey=beta')
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.category,
		description: '\n*ᴅᴀᴛᴇ:*' + v.date + '\n*ɴᴇᴡs:* ' + v.news + '\n*ᴜʀʟ:* ' + v.url + '\n*ᴛʜᴜᴍʙ:* ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `𝗦𝗲𝗹𝗲𝗰𝘁 𝗡𝗲𝘄𝘀 𝗢𝗽𝘁𝗶𝗼𝗻𝘀`,
		description: `*Silahkan Pilih Opsi Berita Dibawah...*`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['newsapi', 'newsapi2', 'news'].map(v => v + ' <app>')
handler.command = ['newsapi', 'newsapi2', 'news']
handler.tags = ['internet']
handler.register = true
handler.limit = true
export default handler