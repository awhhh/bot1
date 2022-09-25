let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendHydrated(m.chat,
`*MEMASUKI MODE AFK 📵*`,
`
${conn.getName(m.sender)} Is Now Afk

ʀᴇᴀsᴏɴ: ${text ? '' + text : 'undefined'}`, null, null, null, null, null, [
[`𝐈𝐓𝐒 𝐎𝐊𝐀𝐘`, `𝐍𝐎𝐓 𝐀𝐋𝐋𝐎𝐖𝐄𝐃`]
], m)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler