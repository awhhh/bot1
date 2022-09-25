import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let level = `
*FAILED UP LEVELING*

*ʟᴇᴠᴇʟ: ${user.level} 📊*
*ᴇxᴘ: ${user.exp - min} / ${xp}*

ᴀɴᴅᴀ ᴍᴇᴍʙᴜᴛᴜʜᴋᴀɴ ᴇxᴘ ʟᴀɢɪ *${max - user.exp}* ᴇxᴘ ʟᴀɢɪ
`.trim()
conn.sendButton(m.chat, hiasan, level, Levelup, [['️𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗣𝗨𝗦𝗛 𝗘𝗫𝗣', '.listexp']],m)
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
*SUCCESSFUL LEVELING UP 📊*

Dari Level *${before}* Ke *${user.level}*
*• Role *${user.role}*
  
`.trim()


        try {
            const src = await levelup(teks, user.level)
            conn.sendButton(m.chat, hiasan, str, thumbLevelup, [['️𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗠𝗘𝗡𝗨', '.menu'],['𝗥𝗘𝗙𝗘𝗥𝗘𝗡𝗖𝗘', '.ref']],m)
        } catch (e) {
            conn.sendButton(m.chat, hiasan, str, thumbLevelup, [['️𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'],['𝗠𝗘𝗡𝗨', '.menu'],['𝗥𝗘𝗙𝗘𝗥𝗘𝗡𝗖𝗘', '.ref']],m)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.register = true
handler.limit = true
handler.command = /^level(|up)$/i

export default handler