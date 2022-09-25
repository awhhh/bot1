import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args[0]) throw `Use example ${usedPrefix}${command} http://i.coco.fun/short/1513tui/`
if (!args[1]) return conn.sendButton(m.chat, htki + ' COCOFUN ' + htka, null, null, [['❌ NO WM', `.cocofun ${args[0]} nowm`],['✅ WITH WM', `.cocofun ${args[0]} withwm`]],m)
let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${global.lolkey}&url=${args[0]}`)
    let x = await res.json()
  if (args[1] == 'withwm') {
    conn.sendButton(m.chat, x.result.withwm, `*${htki} COCOFUN ${htka}*
*ᴛɪᴛʟᴇ:* ${x.result.title}
*ᴛᴀɢ:* ${x.result.tag}
*ʟɪᴋᴇ:* ${x.result.likes}
*ᴅɪsʟɪᴋᴇ:* ${x.result.dislike}
*ᴠɪᴇᴡs:* ${x.result.views}
*ᴜᴘʟᴏᴀᴅᴇʀ:* ${x.result.uploader}
*ᴅᴜʀᴀᴛɪᴏɴ:* ${x.result.duration}
*ᴅɪsʟɪᴋᴇ:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', m)
  }
  if (args[1] == 'nowm') {
    conn.sendButton(m.chat, x.result.nowm, `*${htki} COCOFUN ${htka}*
*ᴛɪᴛʟᴇ:* ${x.result.title}
*ᴛᴀɢ:* ${x.result.tag}
*ʟɪᴋᴇ:* ${x.result.likes}
*ᴅɪsʟɪᴋᴇ:* ${x.result.dislike}
*ᴠɪᴇᴡs:* ${x.result.views}
*ᴜᴘʟᴏᴀᴅᴇʀ:* ${x.result.uploader}
*ᴅᴜʀᴀᴛɪᴏɴ:* ${x.result.duration}
*ᴅɪsʟɪᴋᴇ:* ${x.result.dislike}`, x.result.title + '.mp4', 'To mp3', '.tomp3', m)
  }
  }
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^c(oco(fun(d(own(load(er)?)?|l))?|d(own(load(er)?)?|l))|cfun(d(own(load(er)?)?|l))?)$/i

export default handler
