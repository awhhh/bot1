import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*ʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴀsᴇ ɴᴜʀᴜᴛᴏᴍᴏ*\n\n*📁 sᴄʀɪᴘᴛ ᴠᴇʀsɪᴏɴ: v35.0*`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗦𝗖',
                        url: 'https://github.com/Nurutomo/wabot-aq'
                    }
                },
                {
                    urlButton: {
                        displayText: '𝗕𝗢𝗧 𝗚𝗥𝗢𝗨𝗣',
                        url: 'https://chat.whatsapp.com/JPXhbeh6DsI6G8guMGKrEQ',
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Script By FangzXD', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler