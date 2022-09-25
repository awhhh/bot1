import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let play_list = ['37i9dQZEVXbObFQZ3JLcXt', '37i9dQZEVXbMDoHDwVN2tF', '37i9dQZF1DXa2EiKmMLhFD', '37i9dQZF1DXdHrK6XFPCM1', '3AaKHE9ZMMEdyRadsg8rcy', '4mFuArYRh3SO8jfffYLSER']
let spotify_id = play_list.getRandom()
let imgr = flaaa.getRandom()

    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.sendButton(m.chat, hiasan, '*Selesaikan Dulu Soal Ini*', thumb, butons, conn.tebaklagu[id][0])
        throw false
    }
    let res = await fetch(`https://api.xteam.xyz/game/tebaklagu?id=${spotify_id}&apikey=NezukoTachibana281207`)
    if (res.status !== 200) throw await res.text()
    let result = await res.json()
    let json = result.result
    if (json.artist !== '404') {
    // if (!json.status) throw json
    let wktuhbis = `https://telegra.ph/file/766634332da2be211976e.jpg`

    let caption = `
*GAME TEBAK LAGU*

*🎤ᴘᴇɴʏᴀɴʏɪ:* ${json.artist}
*⏱️ ᴛɪᴍᴇᴏᴜᴛ: ${(timeout / 1000).toFixed(2)} detik*
*🔎 ʜɪɴᴛ:* ${usedPrefix}hlag* untuk bantuan
*🎁 ᴘʀɪᴢᴇ:* ${poin} XP

*📍ʙᴀʟᴀs ᴘᴇsᴀɴ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴡᴀʙ*`.trim()
    conn.tebaklagu[id] = [
        await conn.sendButton(m.chat, bottime, caption, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[id]) conn.sendButton(m.chat, hiasan, `*⏱️ Waktu Habis*\n📑 Jawabannya Adalah *${json.judul}*`, wktuhbis, [
                ['𝐓𝐄𝐁𝐀𝐊 𝐋𝐀𝐆𝐔', '/tebaklagu']
            ], conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
    } else if (json.artist == '404') {
    m.reply(`*Ulangi Command ${usedPrefix + command} Karena ${json.judul}*`)
    }
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu/i

export default handler

const buttons = [
    ['🔎', '/hlag'],
    ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
]

const butons = [
    ['𝐎𝐊𝐄', 'Ok']
]