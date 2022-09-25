import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'jooxs') {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let f = await fetch(`https://anabotofc.herokuapp.com/api/jooxsearch?apikey=AnaBot&query=${text}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
ᴀʟʙᴜᴍ: ${v.album_id}
ɪᴅ: *${v.id}*
ᴊᴜᴅᴜʟ: *${v.name}*
ᴀʟʙᴜᴍ: ${v.album_name}
ᴀʀᴛɪsᴛ: ${v.artist_list.name}
ɪᴍɢ: ${v.images.url}
ᴠɪᴘ: *${v.vip_flag}*
      `.trim()
  }).filter(v => v).join('\n\n*SEARCH*\n\n')
  m.reply(teks)
            }

if (command == 'jooxp') {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`
let f = await fetch(`https://api.lolhuman.xyz/api/jooxplay?apikey=${global.lolkey}&query=${text}`)
let x = await f.json()
let teks = `*RESULT*\n
*sɪɴɢᴇʀ:* ${x.result.info.singer}
*sᴏɴɢs:* ${x.result.info.song}
*ᴀʟʙᴜᴍ:* ${x.result.info.album}
*ᴅᴀᴛᴇ:* ${x.result.info.date}
*ᴅᴜʀᴀᴛɪᴏɴ:* ${x.result.info.duration}
*ᴅᴜʀᴀᴛɪᴏɴ:* ${x.result.lirik}
`
  await conn.sendButton(m.chat, teks, wm, x.result.image, [
                ['Search!', `${usedPrefix}jooxs ${text}`],
                ['Mp3!', `${usedPrefix}get ${x.result.audio[0].link}`]
            ], m)
            }
            
}

handler.command = handler.help = ['jooxs', 'jooxp']
handler.tags = ['tools']
handler.register = true
handler.limit = true
export default handler
