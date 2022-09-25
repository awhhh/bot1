
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!text) return m.reply(`*MAKER JIMP🎨*

*Example: Balas Image Dengan Caption ${usedPrefix + command} effect*

*LIST EFFECT:*
• blur
• brightness
• circle
• contrast
• delete
• fade
• flip
• grayscale
• invert
• opacity
• opaque
• sepia
`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
  
  let thm = args[0]

    let images = `https://violetics.pw/api/jimp/${thm}?apikey=beta&img=${url}`
    let caption = `*${command}*
*ǫᴜᴇʀʏ* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }
//lo mau apa??
handler.help = ['jimp'].map(v => v + ' <efek>')
handler.tags = ['maker']
handler.command = /^(jimp)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}