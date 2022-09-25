import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `\n_Pilih Mode Bot_\n`,wm + '\n\n' + botdate, thumbdoc, [['𝗔𝗖𝗧𝗜𝗩𝗘','.boton'],['𝗡𝗢𝗧 𝗔𝗖𝗧𝗜𝗩𝗘','.botoff']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'MODE BOT',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['botmode']
handler.tags = ['group']
handler.command = /^(botmode)$/i

handler.admin = true
handler.group = true

export default handler