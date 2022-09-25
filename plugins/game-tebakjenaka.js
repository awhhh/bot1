import fetch from 'node-fetch'
let timeout = 60000
let poin = 7999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebakjenaka[id][0])
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/siapaaku?apikey=AnaBot')
    let json = await res.json()
    let caption = `
*GAME TEBAK JENAKA*

*${json.soal}*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hjen ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
    `.trim()
    conn.tebakjenaka[id] = [
        await conn.sendButton(m.chat, caption, author, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakjenaka[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐉𝐄𝐍𝐀𝐊𝐀', '/tebakjenaka']
            ], conn.tebakjenaka[id][0])
            delete conn.tebakjenaka[id]
        }, timeout)
    ]
}
handler.help = ['tebakjenaka']
handler.tags = ['game']
handler.command = /^tebakjenaka/i

export default handler

const buttons = [
    ['🔎', '/hjen'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]