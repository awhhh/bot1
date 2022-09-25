import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (command == 'caribokep') {
if (!text) throw `*Example: ${usedPrefix}${command} japan*`
  let json = await fetch(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${text}&apikey=FuckBitch`)
  let jsons = await json.json()
        let caption = `*${command}*`
        for (let x of jsons.result) {
        caption += `
*💬 ᴛɪᴛʟᴇ:* ${x.title}
*📄 ɪɴғᴏ:* ${x.info}
*🌐 ʟɪɴᴋ:* ${x.link}
`}
        return m.reply(caption)
    }
    if (command == 'caribokep1') {
if (!text) throw `*Example: ${usedPrefix}${command} japan*`
  let json = await fetch(`https://bx-hunter.herokuapp.com/api/pornhubscraper?query=${text}&apikey=FuckBitch`)
  let jsons = await json.json()
        let caption = `*${command}*`
        for (let x of jsons.result) {
        caption += `
*💬 ᴛɪᴛʟᴇ:* ${x.title}
*👁️ ᴠɪᴇᴡʀ:* ${x.views}
*👤 ᴀᴜᴛʜᴏʀ:* ${x.author}
*🌐 ʟɪɴᴋ:* ${x.link}
`}
        return m.reply(caption)
    }
    if (command == 'dlbokep') {
    if (!text) throw `*Example: ${usedPrefix}${command} link Xvideos*`
  let json = await fetch(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${text}&apikey=FuckBitch`)
  let jsons = await json.json()
  let x = jsons.result
conn.sendFile(m.chat, x.files.high, 'asupan.mp4', x.title, m)
}

}
handler.command = handler.help = ['caribokep', 'caribokep1', 'dlbokep']
handler.tags = ['nsfw']
handler.premium = true

export default handler
