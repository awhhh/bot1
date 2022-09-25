import fetch from 'node-fetch'

let handler = async (m, {conn, text, usedPrefix, command }) => {
     if (!text) throw `*Masukan Nama Nabi*\nExample: ${usedPrefix + command} adam`
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") throw "*Tidak Ditemukan, Coba Jangan Pakai Huruf Kapital*"
     
     let hasil = `*👳 ɴᴀʙɪ:* ${kisah.name}
*📅 ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ:* ${kisah.thn_kelahiran}
 *📍 ᴛᴇᴍᴘᴀᴛ ʟᴀʜɪʀ:* ${kisah.tmp}
*📊 ᴜsɪᴀ:* ${kisah.usia}

*— — — — — — — — [ K I S A H ] — — — — — — — —*

${kisah.description}`

     conn.reply(m.chat, hasil, m)

     }
handler.help = ['kisahnabi <name>']
handler.tags = ['islami']
handler.command = /^kisahnabi$/i
handler.register = false
handler.limit = true

export default handler