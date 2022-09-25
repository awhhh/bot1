let handler = async (m, { usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, hiasan, `*Tidak Ada Absen Berlangsung diGrup Ini*\n\n*• Tekan Tombol diBawah Untuk Menghapus Absen*`, `${imgr + '𝐑𝐄𝐌𝐎𝐕𝐄 𝐀𝐁𝐒𝐄𝐍𝐓'}`, [
                ['𝐌𝐔𝐋𝐀𝐈 𝐀𝐁𝐒𝐄𝐍', `${usedPrefix}mulaiabsen`]
            ], m)
    delete conn.absen[id]
    m.reply(`*Absen Berhasil diHapus*`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
export default handler
