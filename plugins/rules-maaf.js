let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

*Minta Maaf Ke Owner Agar Tidak Terkena Pelanggaran*
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
handler.command = /^antibanned$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP