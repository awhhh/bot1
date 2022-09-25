let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

 BANNED SEMENTARA :
• Spam Chat
• Spam Call
• Spam SMS
• Menghina Bot


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
handler.help = ['bansementara']
handler.command = /^kehsggsd$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP