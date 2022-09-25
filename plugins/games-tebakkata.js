import { tebakkata } from '@bochilteam/scraper'

let timeout = 60000
let poin = 7999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, '*Selesaikan Dulu Soal Ini*', conn.tebakkata[id][0])
        throw false
    }
    const json = await tebakkata()
    let caption = `
*GAME TEBAK KATA*

*${json.soal}*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}teka ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
`.trim()
    conn.tebakkata[id] = [
        await conn.sendButton(m.chat, caption, author, ['🔎', `${usedPrefix}teka`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya adalah *${json.jawaban}*`, author, ['𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀', `${usedPrefix}tebakkata`], conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

export default handler