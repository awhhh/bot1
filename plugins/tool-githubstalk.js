import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)

  await m.reply('Searching...')
    let res = await fetch(`https://hadi-api.herokuapp.com/api/githubstalk?username=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.avatar)).buffer()
    let hasil = `*── 「 GITHUB STALK 」 ──*

➸ *ʙɪᴏ*: ${json.result.bio}
➸ *ᴘᴇʀᴜsᴀʜᴀᴀɴ *: ${json.result.company}
➸ *ᴇᴍᴀɪʟ:* ${json.result.email}
➸ *ᴛᴡɪᴛᴛᴇʀ:* ${json.result.twiter_username}
➸ *ʀᴇᴘᴏ ᴘᴜʙʟɪᴄ:* ${json.result.public_repo}
➸ *ɢɪsᴛs ᴘᴜʙʟɪᴄ:* ${json.result.public_gists}
➸ *ғᴏʟʟᴏᴡᴇʀs:* ${json.result.follower}
➸ *ғᴏʟʟᴏᴡɪɴɢ:* ${json.result.following}
➸ *ʟᴏᴄᴀᴛɪᴏɴ:* ${json.result.location}
➸ *ᴛʏᴘᴇ:* ${json.result.Type}
`

    conn.sendFile(m.chat, thumb, 'githubstalk.jpg', hasil, m)
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(githubstalk)$/i
handler.register = true
handler.limit = true
export default handler
