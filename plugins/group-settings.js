let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*${htki} GROUP ${htka}*

ᴘɪʟɪʜ ᴏᴘsɪ ᴅɪʙᴀᴡᴀʜ sᴇsᴜᴀɪ ᴋᴇʙᴜᴛᴜʜᴀɴ

`
const templateButtons = [
    {index: 3, urlButton: {displayText: 'ᴏᴡɴᴇʀ', url: 'https://wa.me/6281347927862'}},
    {index: 4, quickReplyButton: {displayText: '𝗢𝗣𝗘𝗡', id: '.g open'}},
    {index: 5, quickReplyButton: {displayText: '𝗖𝗟𝗢𝗦𝗘', id: '.g close'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['group']
handler.tags = ['group']
handler.command = /^group$/i
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.group = true 

export default handler