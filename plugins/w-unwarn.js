let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw '*Example: #warn @tag*'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw '*Example: #warn @tag*'
    if (!(mention in global.db.data.users)) throw '*User Tidak Terdaftar Dalam DATABASE*'
    let user = global.db.data.users[mention]
    if (user.Banneduser) throw '*[❗] User Telah Terbanned*'
    if ((user.warn * 1) < 1) throw '*User Tidak Mempunyai Warn*'
    let count = (args[1] || args.length > 0 ? !isNaN(parseInt(args[1])) ? parseInt(args[1]) : 1 : 1) || 1
    if ((user.warn * 1) < count * 1) throw `User hanya memiliki *${user.warn * 1}* WARN!!`
    user.warn -= count * 1
    m.reply('*✔️ Berhasil Unwarn User*')
    conn.sendButton(mention, '*[❗] Kamu telah di Unwarn OWNER Atau MODERATOR, Sekarang Kamu Memiliki *' + (global.db.data.users[mention].warn * 1) + '* Warn', wm, [['𝗢𝗪𝗡𝗘𝗥', usedPrefix + 'owner']], null)
}

handler.help = ['unwarn @mention']
handler.tags = ['owner']
handler.command = /^unwarn(user)?$/i
handler.mods = true

export default handler 
