async function handler(m) {
    if (!m.quoted) throw '*[❗] Reply Pesan-nya*'
    let q = await m.getQuotedObj()
    if (!q.quoted) throw '*[❗] Pesan Yang Anda Reply Tidak Mengandung Reply*'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q (reply from teks reply)']
handler.tags = ['baileys']
handler.command = /^q$/i
handler.register = true
handler.limit = true
export default handler
