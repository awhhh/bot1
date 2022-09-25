import fetch from 'node-fetch'
let timeout = 60000
let poin = 7999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakanjime = conn.tebakanjime ? conn.tebakanjime : {}
    let id = m.chat
    if (id in conn.tebakanjime) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebakanjime[id][0])
        throw false
    }
    let res = await fetch(`http://zekais-api.herokuapp.com/tebakanime`)
    let json = await res.json()
    let caption = `*GAME TEBAK ANIME*

*ᴡʜᴀᴛ ʜɪs ɴᴀᴍᴇ?*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hani ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
    `.trim()
    conn.tebakanjime[id] = [
        await conn.sendButton(m.chat, caption, author, json.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakanjime[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.name}*\n\n*ᴅᴇsᴋʀɪᴘsɪ:* ${json.desc}`, author, null, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐀𝐍𝐈𝐌𝐄', '/tebakanime']
            ], conn.tebakanjime[id][0])
            delete conn.tebakanjime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i

export default handler

const buttons = [
    ['🔎', '/hani'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]