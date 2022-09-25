import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (id in conn.tebaklogo) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebaklogo[id][0])
        throw false
    }
    let res = await fetch(`https://api.akuari.my.id/games/tebakapp`)
    let json = await res.json()
    let caption = `*GAME TEBAK LOGO*
*ʟᴏɢᴏ ᴀᴘᴀᴋᴀʜ ɪɴɪ?*

*⏱️ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎ʜɪɴᴛ:* ${usedPrefix}hlog ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ

*📍ʙᴀʟᴀs ᴘᴇsᴀɴ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴡᴀʙ*
    `.trim()
    conn.tebaklogo[id] = [
        await conn.sendButton(m.chat, hiasan, caption, json.hasil.data.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklogo[id]) conn.sendButton(m.chat, bottime, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.hasil.data.jawaban}*`, `${imgr + 'Waktu Habis'}`, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐋𝐎𝐆𝐎', '/tebaklogo']
            ], conn.tebaklogo[id][0])
            delete conn.tebaklogo[id]
        }, timeout)
    ]
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo/i

export default handler

const buttons = [
    ['🔎', '/hani'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]