let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*Gunakan Dengan Cara:*\n\n*• #spamwa nomor|teks|jumlah*\n*Example:*\n*• #spamwa 5219999999999|Hai|25*'
if (!pesan) throw '*Gunakan Dengan Cara:*\n\n*• #spamwa nomor|teks|jumlah*\n*Example:*\n*• #spamwa 5219999999999|Hai|25*'
if (jumlah && isNaN(jumlah)) throw '*Gunakan Dengan Cara:*\n*• #spamwa nomor|teks|jumlah*\n*Example:*\n*• #spamwa 5219999999999|Hai|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[❗] Maksimal 50 Pesan*'
await m.reply(`*✔️ Spam Pesan Ke Nomor ${Nomor} Itu Sukses Dilakukan*\n*Jumlah Terkirim:*\n*— ${fixedJumlah} Waktu!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
handler.private = true
handler.limit = false
export default handler
