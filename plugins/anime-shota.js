import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/shota?apikey=ApiRevita'
	conn.sendButton(m.chat, '*Done Getting Data.*', wm, await(await fetch(url)).buffer(), [['𝐍𝐄𝐗𝐓 ⏭️',`.${command}`]],m)
}
handler.command = /^(shota)$/i
handler.tags = ['anime']
handler.help = ['shota']
handler.premium = false
handler.limit = true

export default handler