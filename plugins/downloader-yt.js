
let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner }) => {
    if (!args[0]) return m.reply('*Example: #ytd https://youtu.be/8UVNT4wvIGY*')
    const sections = [
	{
	title: "🎙️ AUDIO",
	rows: [
	    {title: "Get Audio", rowId: `${usedPrefix}getaud ${args[0]} audio`},
	    {title: "Yt Audio", rowId: `${usedPrefix}yta ${args[0]}`},
	    {title: "Yt Audio Yes", rowId: `${usedPrefix}yta ${args[0]} yes`}
	]
    },
    {
	title: "🎥 VIDEO",
	rows: [
	    {title: "Get Video 1080p", rowId: `${usedPrefix}getvid ${args[0]} 1080`},
{title: "Get Video 720p", rowId: `${usedPrefix}getvid ${args[0]} 720`},
{title: "Get Video 480p", rowId: `${usedPrefix}getvid ${args[0]} 480`},
{title: "Get Video 360p", rowId: `${usedPrefix}getvid ${args[0]} 360`},
{title: "Yt Mp4", rowId: `${usedPrefix}ytmp4 ${args[0]}`},
{title: "Yt Mp4 Yes", rowId: `${usedPrefix}ytmp4 ${args[0]} yes`}
	]
    },
   
]

const listMessage = {
  text: `${htjava} ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʙᴀʟᴀsᴀɴ ɪᴛᴜ ᴀʀᴛɪɴʏᴀ ᴠɪᴅᴇᴏ-ɴʏᴀ ᴛɪᴅᴀᴋ ᴍᴇɴᴅᴜᴋᴜɴɢ ᴋᴜᴀʟɪᴛᴀs ʏᴀɴɢ ᴋᴀᴍᴜ ᴘɪʟɪʜ...`,
  footer: wm,
  title: "⏬ 𝗬𝗧 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥",
  buttonText: "List Quality & Format",
  sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: m})
}

handler.help = ['ytd']
handler.tags = ['downloader']
handler.command = /^ytd(mp[34]|[av])?$/i
handler.exp = 3

export default handler
