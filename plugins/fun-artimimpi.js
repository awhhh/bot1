import { artimimpi } from '@bochilteam/scraper'
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `*Example: ${usedPrefix}${command} Ngewe*`
    const result = await artimimpi(text)
    
await conn.sendButton(m.chat, result, wm, [['𝐃𝐎𝐍𝐀𝐒𝐈', '.donasi']], m)
}

handler.help = ['artimimpi'].map(v => v + ' <Apa>')
handler.tags = ['fun']
handler.command = /^(artimimpi)$/i

export default handler
