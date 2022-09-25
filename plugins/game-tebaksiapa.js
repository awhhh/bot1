import fetch from 'node-fetch'
let timeout = 60000
let poin = 7999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebaksiapa = conn.tebaksiapa ? conn.tebaksiapa : {}
    let id = m.chat
    if (id in conn.tebaksiapa) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebaksiapa[id][0])
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/siapaaku?apikey=AnaBot')
    let json = await res.json()
    let caption = `
*GAME TEBAK SIAPA*

*${json.soal}*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hsia ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ: ${poin} ᴇxᴘ
    `.trim()
    conn.tebaksiapa[id] = [
        await conn.sendButton(m.chat, caption, author, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaksiapa[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐒𝐈𝐀𝐏𝐀', '/tebaksiapa']
            ], conn.tebaksiapa[id][0])
            delete conn.tebaksiapa[id]
        }, timeout)
    ]
}
handler.help = ['tebaksiapa']
handler.tags = ['game']
handler.command = /^tebaksiapa/i

export default handler

const buttons = [
    ['🔎', '/hsia'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]