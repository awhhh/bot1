import fetch from 'node-fetch'

let timeout = 60000
let money = 25000
let limit = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, ' *Selesaikan Dulu Soal Ini* ', conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*GAME SUSUN KATA*

*${json.soal}*

*📋ᴛʏᴘᴇ:* ${json.tipe}
*⏱️ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎ʜɪɴᴛ:* ${usedPrefix}suska ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁ᴘʀɪᴢᴇ:* ${money} ᴍᴏɴᴇʏ & ${limit} ʟɪᴍɪᴛ
`.trim()
    conn.susunkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, money,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.reply(m.chat, `*⏱️ Waktu Habis*\n📑Jawabannya Adalah *${json.jawaban}*`, conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata|sskata/i
handler.limit = true
handler.group = true

export default handler