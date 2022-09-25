import fetch from 'node-fetch'
let timeout = 60000
let poin = 7999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
    let id = m.chat
    if (id in conn.tebakgame) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebakgame[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/RuminasVT2/Felicia6/v10/tebakgame.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
*GAME TEBAK GAME*

*ɢᴀᴍᴇ ᴀᴘᴀᴋᴀʜ ɪɴɪ?*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hgame ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} XP
    `.trim()
    conn.tebakgame[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgame[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐆𝐀𝐌𝐄', '/tebakgame']
            ], conn.tebakgame[id][0])
            delete conn.tebakgame[id]
        }, timeout)
    ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i

export default handler

const buttons = [
    ['🔎', '/hgame'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]