let timeout = 60000
let poin = 25000
let poin_lose = -25000
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya'
  if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
  let id = 'suit_' + new Date() * 1
  let imgr = flaaa.getRandom()
  let caption = `
*SUIT PvP*

*@${m.sender.split`@`[0]} Menantang @${m.mentionedJid[0].split`@`[0]} Untuk Bermain Suit*

Silahkan @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `*ᴋᴇᴛɪᴋ "ᴛᴇʀɪᴍᴀ/ᴏᴋ/ɢᴀs" ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ sᴜɪᴛ*\n*ᴋᴇᴛɪᴋ "ᴛᴏʟᴀᴋ/ɢᴀʙɪsᴀ/ɴᴀɴᴛɪ" ᴜɴᴛᴜᴋ ᴍᴇɴᴏʟᴀᴋ*`
  conn.suit[id] = {
    chat: await conn.sendButton(m.chat, bottime, caption, `${imgr + 'Suit Pvp'}`, [[ 'TERIMA', 'ok'], [ 'ABAIKAN', 'tolak']], m, { mentions: conn.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `*WAKTU SUIT HABIS*`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp'].map(v => v + ' @tag')
handler.command = /^suitpvp$/i
handler.register = true
handler.group = true
handler.limit = true

export default handler