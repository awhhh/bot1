let handler = async (m, { conn }) => {
    if (!m.quoted) throw '*[❗] Reply Pesan ViewOnce Agar Dikirim Ulang*'
    if (m.quoted.mtype !== 'viewOnceMessage') throw '*[❗] Reply Pesan ViewOnce Agar Dikirim Ulang*'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '*[❗] Tidak Bisa Membuka Pesan*'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^readviewonce/i
handler.register = true
handler.limit = true
export default handler