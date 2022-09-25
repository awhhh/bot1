let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

––––––[ *RULES* ]––––––

_Kebijakan Privasi Atau Private Without Being In Public_



• *KEBIJAKAN PRIVASI:*
1. WhatsApp Bot Tidak Akan Merekam Data Riwayat Chat User.
2. WhatsApp Bot Tidak Akan Menyebarkan Nomor Users.
3. WhatsApp Bot Tidak Akan Menyimpan Media Yang Dikirimkan Oleh Users.
4. WhatsApp Bot Tidak Akan Menyalah Gunakan Data Data Users.
5. Owner WhatsApp Bot Berhak Melihat Data Riwayat Chat Users.
6. Owner WhatsApp Bot Berhak Melihat Status Users.
7. Owner WhatsApp Bot Dapat Melihat Riwayat Chat, Dan Media Yang Dikirimkan Users.


• *PERATURAN WHATSAPP BOT:*
1. Users Dilarang Menelpon Maupun VC Nomor Bot.
2. Users Dilarang Mengirimkan Berbagai Bug, Virtex, Dll Ke Nomor Bot.
3. Users Diharap Tidak Melakukan Spam Dalam Penggunaan Bot.
4. Users Diharap Untuk Tidak Menyalah Gunakan Fitur-Fitur Bot.


• *SYARAT KETENTUAN WHATSAPP BOT:*

1. WhatsApp Bot Akan Keluar Dari Group Jika Ada Salah Satu Member Melanggar Peraturan.
2. WhatsApp Bot Dapat Mem-ban Users Secara Sepihak Terlepas Dari Users Salah Atau Tidak.
3. WhatsApp Bot Tidak Akan Bertanggungjawab Atas Apapun Yang Users Lakukan Terhadap Fitur Bot.
4. WhatsApp Bot Akan Memberlakukan Hukuman: Block Atau Ban Terhadap Users Yang Melanggar Peraturan.
5. WhatsApp Bot Bertanggung Jawab Atas Kesalahan Fatal Dalam Programing Maupun Owner.
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'BOT GROUP', url: 'https://chat.whatsapp.com/JPXhbeh6DsI6G8guMGKrEQ'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.tags = ['info']
handler.command = /^bannote$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP