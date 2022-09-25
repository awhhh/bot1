import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/chitoge?apikey=ApiRevita'
	conn.sendButton(m.chat, '*Done Fetching Data.*', wm, await(await fetch(url)).buffer(), [['𝐍𝐄𝐗𝐓 ⏭️',`.${command}`]],m)
}
handler.command = /^(chitoge)$/i
handler.tags = ['anime']
handler.help = ['chitoge']
handler.premium = false
handler.limit = true

export default handler