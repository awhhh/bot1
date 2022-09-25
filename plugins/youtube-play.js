import fs from 'fs';
import crypto from 'crypto'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

   if (!text) throw `*[❗]  Format Salah, Perintah Ini Untuk Mengunduh Audio & Vidio*\n\n Example Using Link:\n*#play https://youtu.be/8UVNT4wvIGY*\n Example Using Title:\n*#play Kobo Kanaeru Mantra Hujan*`
   let vid = (await youtubeSearch(text)).video[0] 
   if (!vid) throw '*Video/Audio Tidak Ditemukan*' 
   let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid 
   const url = 'https://www.youtube.com/watch?v=' + videoId 

    let sewa = `
* 💬 ᴛɪᴛʟᴇ:* ${title} 
* 📡 ᴩᴜʙʟɪsʜᴇᴅ:* ${publishedTime} 
*⌛ ᴅᴜʀᴀᴛɪᴏɴ:* ${durationH} 
* 👁️ ᴠɪᴇᴡs:* ${viewH} 
* 📃 ᴅᴇsᴄʀɪᴩᴛɪᴏɴ:* ${description} 
`

    let img1 = fs.readFileSync('./img/yt.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, `${htki} YT PLAY ${htka}`, sewa, thumbnail, [["MENU", usedPrefix + "menu"], ["PROFILE", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: url,
                mediaType: "VIDEO",
                title: 'Click Video Di Atas Untuk Melihat',
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ['play'].map(v => v + ' <name/url>') 
 handler.tags = ['YouTube'] 
 handler.command = /^(play)$/i 
  handler.register = true
  handler.limit = true
 handler.exp = 0 
 
 export default handler