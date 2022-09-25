import { caklontong } from '@bochilteam/scraper'

let timeout = 60000
let poin = 7999
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) return conn.reply(m.chat, '*Selesaikan Dulu Soal Ini*', conn.caklontong[id][0])
    let json = await caklontong()
    let caption = `
*GAME CAK LONTONG*

*${json.soal}*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}calo ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, author, null, [['🔎', `${usedPrefix}calo`]], m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `*⏱️Waktu Habis*\n📑 Jawabannya Adalah *${json.jawaban}*\n${json.deskripsi}`, author, null, [['Cak Lontong', `${usedPrefix}caklontong`]], conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

export default handler