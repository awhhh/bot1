let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let warning = global.db.data.users[ban].warning
        if (warning < 5) {
            global.db.data.users[ban].warning += 1
            m.reply(`*berhasil Warn!*`)
            conn.sendButton(ban, hiasan, '*[❗] Kamu Di Warn Oleh Moderator, Dan Sekarang Kamu Punya ' + (warning + 1) + ' Warn.\n\n*⚠️ Ingat Jika Kamu Mendapat Warn 5× Kamu Akan Otomatis Ke Banned*', thumbWarn, [['𝗥𝗨𝗟𝗘𝗦', usedPrefix + 'rules']], null)
        } else if (warning == 5) {
            global.db.data.users[ban].banned = true
            global.db.data.users[ban].warning = 0
            m.reply('*Dia Sudah Kebanned, Karena Mendapatkan 5 Warn*')
            conn.sendButton(ban, hiasan, '*[❗] Kamu Ke Banned Karena Telah Mendapatkan 5 Kali Warning*', thumbBanned, [['𝗢𝗪𝗡𝗘𝗥', usedPrefix + 'owner']], null)
        }
    } else conn.reply(m.chat, '*Siapa Yang Mau Di Warn?\nTag orangnya*', m)
}
handler.help = ['warn @tag']
handler.tags = ['owner', 'moderator']
handler.command = /^warn$/i
handler.mods = true

export default handler
