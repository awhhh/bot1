import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

    if (command == 'caribokep') {
    if (!text) throw `*[❗] Example: ${usedPrefix}${command} japan*`
    try {
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/xvideos?query=${text}&apikey=BetaBotz`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. ᴊᴜᴅᴜʟ *${v.title}*
ɪɴғᴏ: ${v.info}
ʟɪɴᴋ: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], m, fdoc)
            } catch {
            let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/xnxx?query=${text}&apikey=BetaBotz`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. ᴊᴜᴅᴜʟ *${v.title}*
ɪɴғᴏ: ${v.info}
ʟɪɴᴋ: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], m, fdoc)
            }
    }
   
  if (command == 'caribokep2') {
  if (!text) throw `*[❗] Contoh Penggunaan ${usedPrefix}${command} japan*`
try {
let f = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.lolkey}&query=${text}`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. ᴊᴜᴅᴜʟ *${v.title}*
ᴠɪᴇᴡ: ${v.views}
ᴅᴜʀᴀᴛɪᴏɴ: ${v.duration}
ᴜᴘʟᴏᴀᴅᴇʀ: ${v.uploader}
ʟɪɴᴋ: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], m, fdoc)
} catch {
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/pornhub?query=${text}&apikey=BetaBotz`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. ᴛɪᴛʟᴇ *${v.title}*
views: ${v.views}
ᴀᴜᴛʜᴏʀ: ${v.author}
ʟɪɴᴋ: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['𝗦𝗘𝗔𝗥𝗖𝗛', `${usedPrefix + command}`]
            ], m, fdoc)
}
    }
    
    if (command == 'dlbokep') {
    if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
    try {
  let json = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=${global.lolkey}&url=${text}`)
  let x = await json.json()
  let caption = `*ᴛɪᴛʟᴇ:* ${x.result.title}
  *ᴅᴜʀᴀᴛɪᴏɴ:* ${x.result.duration}
  *ᴠɪᴇᴡ:* ${x.result.view}
  *ʀᴀᴛɪɴɢ:* ${x.result.rating}
  *ʟɪᴋᴇ:* ${x.result.like}
  *ᴅɪsʟɪᴋᴇ:* ${x.result.dislike}
  *ᴄᴏᴍᴍᴇɴᴛ:* ${x.result.comment}
  *ᴛᴀɢs:* ${Array.from(x.result.tag)}
  *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ :* ${x.result.description}
  `
conn.sendFile(m.chat, x.result.link[1].link, 'asupan.mp4', caption, m)
} catch {
let json = await fetch(`https://bx-hunter.herokuapp.com/api/xnxxdl?url=${text}&apikey=W46QBtQGOhiqfiClaxHqyAaIR`)
  let x = await json.json()
  let caption = `*ᴛɪᴛʟᴇ:* ${x.result.title}
  `
conn.sendFile(m.chat, x.result.files.high, 'asupan.mp4', caption, m)

}
}

}

handler.help = ['caribokep', 'caribokep2', 'dlbokep'].map(v => v + ' <app>')
handler.command = ['caribokep', 'caribokep2', 'dlbokep']
handler.tags = ['nsfw']
handler.register = true
handler.limit = true
export default handler
