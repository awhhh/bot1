let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`*MAKER OXY🎨*

*Example : ${usedPrefix + command} gravity helo*

*LIST EFEK:*
burnpaper
butterfly
coffecup
coffee
doubleheart
flaming
grass
gravity
lovemessage
lovetext
naruto
oceansea
quotewood
rainbow
romantic
shadow
smoke`)
  
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
        let images = `https://api-xcoders.xyz/api/photooxy/${thm}?text=${text1}&apikey=${global.xckey}`
        let caption = `*${command}*
*ǫᴜᴇʀʏ* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.help = ['photooxy']
handler.tags = ['maker']
handler.command = /^(oxy|photooxy)$/i
handler.register = true
handler.limit = true

export default handler