import fetch from 'node-fetch'
let timeout = 60000
let poin = 79999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {}
    let id = m.chat
    if (id in conn.tebakkalimat) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebakkalimat[id][0])
        throw false
    }
    let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/siapaaku?apikey=AnaBot')
    let json = await res.json()
    let caption = `
*GAME TEBAK KALIMAT*

*${json.soal}*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hkal ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
    `.trim()
    conn.tebakkalimat[id] = [
        await conn.sendButton(m.chat, caption, author, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkalimat[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐋𝐈𝐌𝐀𝐓', '/tebakkalimat']
            ], conn.tebakkalimat[id][0])
            delete conn.tebakkalimat[id]
        }, timeout)
    ]
}
handler.help = ['tebakkalimat']
handler.tags = ['game']
handler.command = /^tebakkalimat/i

export default handler

const buttons = [
    ['🔎', '/hkal'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]