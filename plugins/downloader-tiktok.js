import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper' 
 import fetch from 'node-fetch' 
  
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
     if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243` 
     const { author: { nickname }, video, description } = await tiktokdl(args[0]) 
         .catch(async _ => await tiktokdlv2(args[0])) 
         .catch(async _ => await tiktokdlv3(args[0])) 
     const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd 
     if (!url) throw '*Gagal Mengunduh Vidio*' 
     conn.sendHydrated(m.chat, `*${htki} TIKTOK NOWM ${htka}*`, `*💬 ɴɪᴄᴋɴᴀᴍᴇ:* ${nickname}${description ? `\n*📝 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*\n${description}` : ''}`, await (await fetch(url)).buffer(), 
         url, '🌐 sᴏᴜʀᴄᴇ', null, null, [ 
         ['𝐃𝐎𝐍𝐀𝐒𝐈', `.donasi`], 
         ['𝐀𝐔𝐃𝐈𝐎', `.tiktokaudio ${args}`], 
         [null, null]], m) 
 } 
 handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>') 
 handler.tags = ['downloader'] 
 handler.command = /^(tik(tok)?(tok)?(dl)?)$/i 
  
 export default handler