const isSatir = /(([Kk]enao|[Bb]ims|[Aa]v)a|tumlul|Tumlul|[Gg]wejh|[Oo]kgey|[Ss]iava|[Kk]avan|tenan|[Aa](msu|f[ah])|[Mm]gak|lmao|[Pp]edo|([Bb]an|hoo)h|[Kk]nf)/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiSatir = isSatir.exec(m.text)

    if (chat.antiSatir && isAntiSatir) {
        await conn.sendButton(m.chat, `*KATA SATIR TERDETEKSI*${isBotAdmin ? '' : '\n\n_Bot Bukan Admin_'}`, author, ['off antisatir', '/disable antisatir'], m)
        if (isBotAdmin && bot.restrict) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit -= 10
    
    await conn.sendButton(m.chat, `*Limit Anda Berkurang 10*
    Karena Menggunakan Kata Satir
    
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsidhhd`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    return !0
}