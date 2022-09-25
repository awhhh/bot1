import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
    if (!args[0]) throw `*Example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/*`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `*• ᴜʀʟ:* ${url}`, m)
    } catch {
if (!text) throw '*MASUKKAN TAUTAN*\n\nExample: .fb https://www.facebook.com/DramaFacbook21/videos/1775049149358700/?app=fbl'
let res = await axios('https://violetics.pw/api/downloader/facebook?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htki + '*📌 ǫᴜᴀʟɪᴛʏ:* ' + v.subname,
		description: '\n*• ɪᴅ:* ' + json.result.id + '\n*• ᴛɪᴛʟᴇ:* ' + json.result.meta.title + '\n*• ᴜʀʟ:* ' + v.url + '\n*• sᴏᴜʀᴄᴇ:* ' + json.result.meta.source + '\n*• ᴠɪᴇᴡs:* ' + json.result.meta.duration + '\n*• sᴅ:* ' + json.result.sd.url + '\n\n*• ʜᴅ:* ' + json.result.hd.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
    }
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f(acebook(d(own(load(er)?)?|l))?|b(d(own(load(er)?)?|l))?)$/i

export default handler
