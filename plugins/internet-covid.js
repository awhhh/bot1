import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw '*Example: #covid Indonesia*'
  if (json.confirmed) m.reply(`
*🌏 ᴄᴏᴜɴᴛʀʏ:* ${text}
*✅ ᴄᴏɴғɪʀᴍᴇᴅ:* ${json.confirmed.value}
*📉 ʜᴇᴀʟᴇᴅ:* ${json.recovered.value}
*☠️ ᴅɪᴇ:* ${json.deaths.value}
*📁 ɪɴғᴏ ᴜᴘᴅᴀᴛᴇ:* ${json.lastUpdate}
`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <negara>')
handler.tags = ['internet']
handler.limit = true
handler.command = /^(corona|covid|covid19)$/i
export default handler
