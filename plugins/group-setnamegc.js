let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (!text) throw "*Example: #setname 𝗙𝗲𝗹𝗶𝗰𝗶𝗮 𝗕𝗼𝘁 𝗙𝗮𝗻 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆*"
  await conn.groupUpdateSubject(m.chat, text)
 m.reply(`*${text ? `${text}` : 'None'}*\n\nNama Group Sekarang.`)
}
handler.help = ['setname <teks>']
handler.tags = ['group']
handler.command = /^setname$/i
handler.botAdmin = true
handler.group = true
handler.admin = true
export default handler
