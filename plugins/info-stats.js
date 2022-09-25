import fs from 'fs'
import os from 'os'
import { sizeFormatter } from 'human-readable'
let formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: '2',
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
})

let handler = async (m, { conn }) => {
	let chats = Object.entries(conn.chats).filter(([a, b]) => a && b.isChats),
		groups = chats.filter(([a]) => a.endsWith('@g.us')),
		session = fs.statSync(authFile),
		txt = `
*🌐 BOT STATISTICS 🌐*

*BOT:*
- ${groups.length} ɢʀᴏᴜᴘ ᴄʜᴀᴛs
- ${chats.length - groups.length} ᴘᴇʀsᴏɴᴀʟ ᴄʜᴀᴛs
- ${chats.length} ᴛᴏᴛᴀʟ ᴄʜᴀᴛs

*SERVER:*
- ᴘʟᴀᴛғᴏʀᴍ: ${process.platform}
- ɴᴏᴅᴇᴊs: ${process.version}
- sᴇssɪᴏɴ sɪᴢᴇ: ${formatSize(session.size)}
- ᴍᴇᴍᴏʀʏ: ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}
`
	m.reply(txt.trim())
}
handler.alias = ['stats']
handler.command = /^(stats)$/i

export default handler
