let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*「 GROUP INFORMATION 」*\n
*ɪᴅ:* 
${groupMetadata.id}
*ɴᴀᴍᴇ:* 
${groupMetadata.subject}
*ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* 
${groupMetadata.desc?.toString() || 'unknown'}
*ᴛᴏᴛᴀʟ ᴍᴇᴍʙᴇʀ:*
${participants.length} ᴍᴇᴍʙᴇʀ
*ɢʀᴏᴜᴘ ᴏᴡɴᴇʀ:* 
@${owner.split('@')[0]}
*ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ:*
${listAdmin}
*ɢʀᴏᴜᴘ sᴇᴛᴛɪɴɢ:*
${isBanned ? '✅' : '❌'} ʙᴀɴɴᴇᴅ
${welcome ? '✅' : '❌'} ᴡᴇʟᴄᴏᴍᴇ
${detect ? '✅' : '❌'} ᴅᴇᴛᴇᴄᴛ
${del ? '❌' : '✅'} ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
${antiLink ? '✅' : '❌'} ᴀɴᴛɪʟɪɴᴋ

*ᴍᴇssᴀɢᴇ sᴇᴛᴛɪɴɢ:*
ᴡᴇʟᴄᴏᴍᴇ: ${sWelcome}
ʙʏᴇ: ${sBye}
ᴘʀᴏᴍᴏᴛᴇ: ${sPromote}
ᴅᴇᴍᴏᴛᴇ: ${sDemote}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler