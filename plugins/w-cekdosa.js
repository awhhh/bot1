let handler = async (m) => {
    let user = db.data.users[m.sender]
    let botol = global.wm
    let who = m.mentionedJid && m.mentionenJid ? m.mentionedJid : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [m.sender]
    let username = conn.getName(who)
    let str = `*• ᴅᴏsᴀ* ${username}\n*${user.warning}/100*
`.trim()
    conn.sendButton(m.chat, str, `${botol}`, [[`𝗧𝗢𝗕𝗔𝗧`, `.maaf`]], m)
    conn.reply(str)
}
handler.help = [`cekdosa`]
handler.tag = [`fun`,`islam`,'cek']
handler.command = /^(cekdosa|dosa)$/i

export default handler 
