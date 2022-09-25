let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Example: #groupspam Kitsuneee', m)

    let pesan = `${text}`
    await m.reply('*Bot Akan Spam 30×*')
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)

    conn.reply(m.chat, '*Selesai Spam 30×*', m)
}
handler.help = ['groupspam'].map(v => v + ' <teks>')
handler.tags = ['group']
handler.command = /^(groupspam)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.exp = 100
handler.limit = true

export default handler 
