import fetch from 'node-fetch'
let timeout = 60000
let poin = 7999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakchara = conn.tebakchara ? conn.tebakchara : {}
    let id = m.chat
    if (id in conn.tebakchara) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.tebakchara[id][0])
        throw false
    }
    let res = await fetch('https://api.jikan.moe/v4/characters')
    let jsons = await res.json()
    let jso = jsons.data
    let json = jso.getRandom()
    let caption = `*GAME TEBAK CHARACTER*

*sɪᴀᴘᴀᴋᴀʜ ɴᴀᴍᴀ ᴅᴀʀɪ ɢᴀᴍʙᴀʀ ɪɴɪ?*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hcha ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
    `.trim()
    conn.tebakchara[id] = [
        await conn.sendButton(m.chat, caption, author, `${json.images.jpg.image_url}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakchara[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.name}*\nKanji : ${json.name_kanji}\n*Url :* ${json.url}\n*Desk :* ${json.about}`, author, json.images.jpg.image_url, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐂𝐇𝐀𝐑𝐀', '/tebakchara']
            ], conn.tebakchara[id][0])
            delete conn.tebakchara[id]
        }, timeout)
    ]
}
handler.help = ['tebakchara']
handler.tags = ['game']
handler.command = /^tebakchara/i

export default handler

const buttons = [
    ['Hint', '/hcha'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]