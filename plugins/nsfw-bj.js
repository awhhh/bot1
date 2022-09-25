import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random2/bj?apikey=${global.lolkey}'
	conn.sendButton(m.chat, '*Done Fetching*', wm, await(await fetch(url)).buffer(), [['𝐍𝐄𝐗𝐓 ⏭️',`.${command}`]],m)
}
handler.command = /^(bj)$/i
handler.tags = ['nsfw']
handler.help = ['bj']
handler.premium = false
handler.limit = true

export default handler