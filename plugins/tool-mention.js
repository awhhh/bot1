let handler = async (m, { conn, text }) => {
  if (!text) throw '*[❗] Example: #mention Hai*'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

export default handler 
