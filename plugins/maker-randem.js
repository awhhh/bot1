let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`*MAKER RANDEM 🎨*

Example : ${usedPrefix + command} cuddle

*LIST EFEK:*

• bully
• cuddle
• cry
• hug
• awoo
• kiss
• lick
• pat
• smug
• bonk
• yeet
• blush
• smile
• wave
• smile
• wave
• highfive
• handhold
• nom
• bite
• glomp
• kill
• slap
• happy
• wink
• poke
• dance
• cringe
• blush`)
        let images = `https://api.lolhuman.xyz/api/random/${text}?apikey=${global.lolkey}`
        await conn.sendButton(m.chat, `*Done Making ${text}*`, wm, images, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m)
}
handler.help = ['randem'].map(v => v + ' <efek>')
handler.tags = ['tools']
handler.command = /^(randem)$/i
handler.register = true
handler.limit = true
export default handler