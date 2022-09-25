import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://myselfff.herokuapp.com/docs/anime/nezuko'
	conn.sendButton(m.chat, '*Done Getting Data.*', wm, await(await fetch(url)).buffer(), [['𝐍𝐄𝐗𝐓 ⏭️',`.${command}`]],m)
}
handler.command = /^(nezuko)$/i
handler.tags = ['anime']
handler.help = ['nezuko']
handler.premium = false

export default handler