import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let poin = 7999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, '*Selesaikan Dulu Soal Ini*', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
*GAME SIAPAKAHAKU*

sɪᴀᴘᴀᴋᴀʜ ᴀᴋᴜ? *${json.soal}*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}who ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['🔎', `${usedPrefix}who`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `*⏱️ Waktu Habis*\n📑 Jawabannya adalah *${json.jawaban}*`, author, ['𝐒𝐈𝐀𝐏𝐀𝐊𝐀𝐇 𝐀𝐊𝐔', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

export default handler