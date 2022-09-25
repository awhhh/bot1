// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw '*[❗] Format Salah, Perintah Ini Untuk Mengganti Ukuran Media Vidio/Gambar*\n\n*Format: #resize Lebar Tinggi\n*Example: #resize 900 1600\n\n*Reply Media-nya*'
	if (!toheight) throw *[❗] Format Salah, Perintah Ini Untuk Mengganti Ukuran Media Vidio/Gambar*\n\n*Format: #resize Lebar Tinggi\n*Example: #resize 900 1600\n\n*Reply Media-nya*'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "*[❗] Format Salah, Perintah Ini Untuk Mengganti Ukuran Media Vidio/Gambar*\n\n*Format: #resize Lebar Tinggi\n*Example: #resize 900 1600\n\n*Reply Media-nya*"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `*[❗] Mime ${mime} Tidak Didukung*`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.size(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*${htki} COMPRESS RESIZE ${htka}*

*• BEFORE*
 ᴡɪᴅᴛʜ : ${size.before.width}
 ʜᴇɪɢʜᴛ : ${size.before.height}

*• AFTER*
 ᴡɪᴅᴛʜ : ${size.after.width}
 ʜᴇɪɢʜᴛ : ${size.after.height}

*• LINK*
 ᴏʀɪɢɪɴᴀʟ : ${link}
 ᴄᴏᴍᴘʀᴇss : ${linkcompres}`, m)
}
handler.help = ['resize <width> <height> (reply|caption)']
handler.tags = ['tools']
handler.command = /^(resize)$/i
handler.register = true
handler.limit = true
export default handler
