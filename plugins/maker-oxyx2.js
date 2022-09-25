let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER OXYX2 🎨*

*Example : ${usedPrefix + command} efek|text1|text2*

*LIST EFEK:*
tiktokmaker
8bit`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://violetics.pw/api/photooxy/${thm}?apikey=beta&text=${text1}&text2=${text2}`
        let caption = `*${command}*
*ǫᴜᴇʀʏ* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.command = /^(oxyx2|photooxyx2)$/i
handler.tags = ['maker']
handler.help = ['oxyx2']
handler.limit = true
handler.register = true

export default handler