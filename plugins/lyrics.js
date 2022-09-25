import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `*Example ${usedPrefix}${command} Love Story*`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
*• ʟʏʀɪᴄs ${result.title}*
*• ᴀᴜᴛʜᴏʀ ${result.author}*
*• ᴜʀʟ ${result.link}*


${result.lyrics}

`.trim())
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler