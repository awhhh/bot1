let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER OXY2 🎨*

*Example : ${usedPrefix + command} pubg|helo|banh*

*LIST EFEK:*
pubg
slidetext
glitch`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://api-xcoders.xyz/api/photooxy/${thm}?text=${text1}&text2=${text2}&apikey=${global.xckey}`
        let caption = `*${command}*
*ǫᴜᴇʀʏ* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.help = ['photooxy2']
handler.tags = ['maker']
handler.command = /^(oxy2|photooxy2)$/i
handler.register = true
handler.limit = true

export default handler