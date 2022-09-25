import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
if (!text) throw `*IMAGE KIT*

Contoh Penggunaan:
*${usedPrefix}${command} tema|teks*

Example:
*${usedPrefix}${command} kucing|Kak Pap*

*LIST TEMA:*
• Kucing
• Senyum
• Monyet
`
let res = `https://ik.imagekit.io/aygemuy/tr:ot-${text1},ots-400,otc-ffff00,or-50/${thm}.jpg`
conn.sendButton(m.chat, `Done *${command}*`, author, res, [['TEMA', `.imgkit ${text1}`]], m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})

}
handler.command = /^(imagekit)$/i

export default handler