let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER EPHOTO2 🎨*

Example : ${usedPrefix + command} buoys|helo|banh

*LIST EFEK:*
 buoys
 heated
 pencil
 quotestatus
 wood`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://api-xcoders.xyz/api/ephoto/${thm}?text=${text1}&text2=${text2}&apikey=${global.xckey}`
  let caption = `*${command}*
*ǫᴜᴇʀʏ* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.help =['ephoto2']
handler.tags = ['maker']
handler.command = /^(epho2|ephoto2)$/i

handler.limit = true

export default handler