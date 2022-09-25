import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*❔ Ngapain nyari Owner ku*\n\nhttp://bīt.ly/ᯤ`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '𝐁𝐒𝐓𝐀𝐓𝐈𝐎𝐍 𝐎𝐖𝐍𝐄𝐑',
                        url: 'https://bili.im/EktBYXY',
                    }
                },
                {
                    urlButton: {
                        displayText: '𝐖𝐀 𝐎𝐖𝐍𝐄𝐑',
                        url: 'https://wa.me/6281347927862',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📝 𝐌𝐄𝐍𝐔',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '⚡ 𝐏𝐈𝐍𝐆',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💰 𝐒𝐄𝐖𝐀 𝐁𝐎𝐓',
                        id: '.sewabot'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.command = /^(nameown)$/i

handler.register = true
handler.exp = 3

export default handler