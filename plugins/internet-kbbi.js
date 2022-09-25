import { kbbi } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*Example: ${usedPrefix}${command} Hai*`
    const res = await kbbi(text)
    m.reply(`
${res.map(v => `
*📌${v.title}*

${v.means.map(v => '- ' + v).join('\n`')}
`).join('\n').trim()}

ɴᴏᴛᴇ:
ᴘ = ᴘᴀʀᴛɪᴋᴇʟ: ᴋᴇʟᴀs ᴋᴀᴛᴀ ʏᴀɴɢ ᴍᴇʟɪᴘᴜᴛɪ ᴋᴀᴛᴀ ᴅᴇᴘᴀɴ, ᴋᴀᴛᴀ sᴀᴍʙᴜɴɢ, ᴋᴀᴛᴀ sᴇʀᴜ, ᴋᴀᴛᴀ sᴀɴᴅᴀɴɢ, ᴜᴄᴀᴘᴀɴ sᴀʟᴀᴍ
ɴ = ɴᴏᴍɪɴᴀ: ᴋᴀᴛᴀ ʙᴇɴᴅᴀ
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler