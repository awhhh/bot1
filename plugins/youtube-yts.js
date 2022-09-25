import { youtubeSearch } from '@bochilteam/scraper' 
 let handler = async (m, { conn, text, command, usedPrefix }) => { 
   if (!text) throw `*[❗]  Format Salah, Perintah Ini Untuk Mencari Channel/Video Dari YouTube*\n\nExample:\n*#yts Cara Membuat Bot WhatsApp*`
   const { video, channel } = await youtubeSearch(text) 
   const listSections = [] 
   let teks = [...video, ...channel].map(v => { 
     switch (v.type) { 
       case 'video': { 
         listSections.push([`${v.title}`, [ 
           ['𝗩𝗜𝗗𝗘𝗢', `${usedPrefix}ytv ${v.url} yes`, `download ${v.title} (${v.url})`], 
           ['𝗔𝗨𝗗𝗜𝗢', `${usedPrefix}yta ${v.url} yes`, `download ${v.title} (${v.url})`] 
         ]]) 
         return ` 
 *${htjava} ᴛɪᴛʟᴇ: ${v.title}* 
 *${htjava} ᴜʀʟ: ${v.url}*
 *${htjava} ᴅᴜʀᴀᴛɪᴏɴ: ${v.durationH}*
 *${htjava} ᴩᴜʙʟɪsʜᴇᴅ: ${v.publishedTime}*
 *${htjava} ᴠɪᴇᴡs: ${v.view}*
       `.trim() 
       } 
       case 'channel': return ` 
*ɴᴀᴍᴇ: ${v.channelName}* 
*ᴜʀʟ: ${v.url}*
*sᴜʙsᴄʀɪʙᴇʀ:${v.subscriberH} (${v.subscriber}) sᴜʙsᴄʀɪʙᴇʀ* 
*ᴛᴏᴛᴀʟ ᴠɪᴅᴇᴏ: ${v.videoCount} ᴠɪᴅᴇᴏ*
 `.trim() 
     } 
   }).filter(v => v).join('\n\n=━━━━━━━━━━━━━━━━━━━━\n\n') 
   conn.sendButton(m.chat, `*━━━━『 YT SEARCH 』━━━━*`, teks, `./media/ytsearch.jpg`, [ 
       [`TERIMA KASIH CANTIK`, `Ok`] 
       ], m, {asLocation: true}) 
 } 
 handler.help = ['ytsearch'].map(v => v + ' <name>') 
 handler.tags = ['YouTube'] 
 handler.command = /^(yts|ytsearch)$/i 
 handler.register = true
 handler.limit = true
 export default handler