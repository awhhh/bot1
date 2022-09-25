import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {

    let sewa = `
*📋 BIODATA OWNER ${namebot}*
    
ɴᴀᴍᴀ: ${nameowner}
ᴜᴍᴜʀ: ${umurowner}
ᴀsᴀʟ: ${asalowner}
ɴᴏᴍᴏʀ: ${nomorowner}

${botdate}
`

    let img1 = fs.readFileSync('./img/atas.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, img1, [["𝐌𝐄𝐍𝐔", usedPrefix + "menu"], ["𝐏𝐑𝐎𝐅𝐈𝐋𝐄", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/aguzfamilia",
                mediaType: "VIDEO",
                title: hiasan,
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(owner|creator)$/i

export default handler
