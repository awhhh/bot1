import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let caption = `*DARKJOKE*
*🔎 ǫᴜᴇʀʏ* : ${command}`
try {
        let images = `https://api-xcoders.xyz/api/random/darkjoke?apikey=${global.xckey}`
        await conn.sendButton(m.chat, caption, wm, images, [['NEXT','.darkjoke'] , ['TERTAWA','huuu']], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
        } catch {
        let res = await bo.Darkjokes()
await conn.sendButton(m.chat, hiasan, caption, res, [['NEXT','.darkjoke'] , ['TERTAWA','huuu']], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i

export default handler
