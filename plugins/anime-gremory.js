import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/gremory?apikey=ApiRevita'
	conn.sendButton(m.chat, '*Done Fetching Data.*', wm, await(await fetch(url)).buffer(), [['𝐍𝐄𝐗𝐓 ⏭️',`.${command}`]],m)
}
handler.command = /^(gremory)$/i
handler.tags = ['anime']
handler.help = ['gremory']
handler.premium = false
handler.limit = true

export default handler