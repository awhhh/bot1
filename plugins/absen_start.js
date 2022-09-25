let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `*Masih Ada Absen Di Chat Ini*\n\n*• Tekan Tombol diBawah Untuk Menghapus Absen*`, author, null, [
                ['𝐑𝐄𝐌𝐎𝐕𝐄 𝐀𝐁𝐒𝐄𝐍𝐓', `${usedPrefix}hapusabsen`]
            ], m)
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `*Berhasil Memulai Absen*\n\n*${usedPrefix}absen* - Untuk Absen\n*${usedPrefix}cekabsen* - Untuk Mengecek Absen\n*${usedPrefix}hapusabsen* - Untuk Menghapus Sesi Absen`, author, null, [
                ['𝐇𝐀𝐃𝐈𝐑', `${usedPrefix}absen`]
            ], m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
export default handler
