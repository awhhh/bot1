import fetch from 'node-fetch'
let timeout = 60000
let poin = 7999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat : {}
    let id = m.chat
    if (id in conn.lengkapikalimat) {
        conn.sendButton(m.chat, '*Selesaikan Dulu Soal Ini*', author, null, buttons, conn.lengkapikalimat[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/lengkapikalimat.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
*GAME LENGKAPI KALIMAT*

*${json.pertanyaan}*

*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)}s*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hlen ᴜɴᴛᴜᴋ ʙᴀɴᴛᴜᴀɴ
*🎁 ᴘʀɪᴢᴇ:* ${poin} ᴇxᴘ
    `.trim()
    conn.lengkapikalimat[id] = [
        await conn.sendButton(m.chat, caption, author, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.lengkapikalimat[id]) conn.sendButton(m.chat, `*⏱️Waktu Habis*\n📑 Jawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝐋𝐄𝐍𝐆𝐊𝐀𝐏𝐈 𝐊𝐀𝐋𝐈𝐌𝐀𝐓', '/lengkapikalimat']
            ], conn.lengkapikalimat[id][0])
            delete conn.lengkapikalimat[id]
        }, timeout)
    ]
}
handler.help = ['lengkapikalimat']
handler.tags = ['game']
handler.command = /^lengkapikalimat/i

export default handler

const buttons = [
    ['🔎', '/hlen'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]