import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  if (!text) throw '*[❗] Sematkan Link Setelah Perintah*'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/cuttly?url=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw '*[❗] LINK INVALID*\nPeriksa url anda'
}
handler.help = ['cuttly'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^cuttly$/i
handler.limit = true
handler.premium = true

export default handler
