// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix }) => {
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "*[❗] Reply Media Yang Ingin Dicek Resolusinya*"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()

m.reply(`_*${hsquere[0]}  RESOLUTION :*_ ${width} x ${height}

*ᴡɪᴅᴛʜ:* ${width}
*ʜᴇɪɢʜᴛ:* ${height}

> ʟɪɴᴋ : ${link}`)
}
handler.help = ['cekresolution <reply | caption>', 'cekreso <reply | caption>']
handler.tags = ['tool']
handler.command = /^(cekreso(lution)?)$/i
handler.register = true
handler.limit = true
export default handler