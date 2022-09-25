import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/mikasa?apikey=ApiRevita'
	conn.sendButton(m.chat, '*Done Getting Data.*', wm, await(await fetch(url)).buffer(), [['𝐍𝐄𝐗𝐓 ⏭️',`.${command}`]],m)
}
handler.command = /^(mikasa)$/i
handler.tags = ['anime']
handler.help = ['mikasa']
handler.premium = false
handler.limit = true

export default handler