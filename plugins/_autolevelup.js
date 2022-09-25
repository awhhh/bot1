import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
📊Level ${user.level}
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* Lagi
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `*Selamat ${conn.getName(m.sender)} Naik Level*\n • Role ${user.role}`
        let str = `*Selamat ${conn.getName(m.sender)} Naik Level*\n • Role ${user.role}

*📊HAPPY LEVELING*

*Dari Level ${before} Ke Level ${user.level}*
* • Role${user.role}*

#lb - Untuk Cek Leaderboard
#my - Untuk Cek Stat Kamu

⌚Time : ${new Date().toLocaleString('id-ID')}

`.trim()
            let knights = await(await import('knights-canvas'))
            let image = await new knights.Up()
    .setAvatar(hwaifu.getRandom())
    .toAttachment();
  let data = image.toBuffer();
            try {
            let img = await levelup(teks, user.level)
            conn.sendButton(m.chat, str, botdate, img, [['𝐈𝐍𝐕𝐄𝐍𝐓𝐎𝐑𝐘', '.inv']], m)
            } catch (e) {
            conn.sendButton(m.chat, str, botdate, data, [['𝐈𝐍𝐕𝐄𝐍𝐓𝐎𝐑𝐘', '.inv']], m)
            }

    }
}