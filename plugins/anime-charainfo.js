import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `*Masukkan Nama Characternya.*\nContoh: #character Rimuru`
  try {
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, mal_id, type } = json.results[0]
let charaingfo = `*CHARACTER STALK*\n
• *ɪᴅ ᴄʜᴀʀᴀᴄᴛᴇʀ:* ${mal_id}
• *ɴᴀᴍᴇ:* ${name}
• *ɴɪᴄᴋɴᴀᴍᴇ:* ${alternative_names}
• *ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛʏᴘᴇ:* ${type === undefined ? 'Default' : type}
• *ʟɪɴᴋ ᴡᴀᴛᴄʜ:* ${url}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
 } catch {
  m.reply('*Tidak diTemukan, Harap Masukkan Nama Yang Benar.*')
 }
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.limit = true
handler.command = /^(character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler 