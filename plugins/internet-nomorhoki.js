import { nomorhoki } from '@bochilteam/scraper'
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} 62xxxxxxx`
    const result = await nomorhoki(text)
    
let nohoki = `
*HOCKY NUMBER*

*ɴᴏᴍᴏʀ:* ${result.nomer}
*ᴀɴɢᴋᴀ ʙᴀɢᴜᴀ sʜᴜᴢɪ:* ${result.angka_bagua_shuzi}

*POSITIVE Aura*
*ᴘᴏsɪᴛɪғ:* ${result.positif.positif}
*ᴋᴇᴋᴀʏᴀᴀɴ:* ${result.positif.kekayaan}
*ᴋᴇsᴇʜᴀᴛᴀɴ:* ${result.positif.kesehatan}
*ᴄɪɴᴛᴀ:* ${result.positif.cinta}
*ᴋᴇsᴛᴀʙɪʟᴀɴ:* ${result.positif.kestabilan}

*NEGATIVE Aura*
*ɴᴇɢᴀᴛɪғ:* ${result.negatif.negatif}
*ᴘᴇʀsᴇʟɪsɪʜᴀɴ:* ${result.negatif.perselisihan}
*ᴋᴇʜɪʟᴀɴɢᴀɴ:* ${result.negatif.kehilangan}
*ᴍᴀʟᴀᴘᴇᴛᴀᴋᴀ:* ${result.negatif.malapetaka}
*ᴋᴇʜᴀɴᴄᴜʀᴀɴ:* ${result.negatif.Kehancuran}
`
await conn.sendButton(m.chat, nohoki, wm, [['MENU', '.menu']], m)
}

handler.help = ['nomorhoki'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(nomorhoki)$/i
handler.limit = true

export default handler
