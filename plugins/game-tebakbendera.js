import fetch from 'node-fetch'
let timeout = 60000
let poin = 7999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*GAME TEBAK BENDERA*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hben ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
    `.trim()
    conn.tebakbendera[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\nJawabannya Adalah *${json.name}*`, author, null, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐁𝐄𝐍𝐃𝐄𝐑𝐀', '/tebakbendera']
            ], conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

export default handler

const buttons = [
    ['🔎', '/hben'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]