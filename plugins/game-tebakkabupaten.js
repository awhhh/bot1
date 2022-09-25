import fetch from 'node-fetch'
let timeout = 60000
let poin = 79999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebakkabupaten[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
*GAME TEBAK KABUPATEN*

ᴋᴀʙᴜᴘᴀᴛᴇɴ ᴀᴘᴀᴋᴀʜ ɪɴɪ?
 
*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hkab ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
    `.trim()
    conn.tebakkabupaten[id] = [
        await conn.sendButton(m.chat, caption, author, json.url, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkabupaten[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\nJawabannya Adalah *${json.title}*`, author, null, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐁𝐔𝐏𝐀𝐓𝐄𝐍', '/tebakkabupaten']
            ], conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

export default handler

const buttons = [
    ['🔎', '/hkab'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]