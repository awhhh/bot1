let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `*[❗] Tidak Ada Voting Digrup Ini*`, author, null, [
    ['𝗩𝗢𝗧𝗘', `${usedPrefix}+vote`],
    ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
], m)
    delete conn.vote[id]
    m.reply(`*✔️ Berhasil*`)
}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus|-)vote$/i

handled.admin = true
handler.group = true

export default handler
