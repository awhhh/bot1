import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args }) => {
    const fetch = (await import('node-fetch')).default
    let full = /f$/i.test(command)
    let text = args.join` `
    if (!text) return conn.reply(m.chat, '*Example: #google Cara Mengatasi Cewek PMS*', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*💬 ᴛɪᴛʟᴇ:* ${title}\n*🌐 ᴜʀʟ:* ${url}\n*📝 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*\n${description}`
    }).join('\n\n')
    try {
        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    } catch (e) {
        m.reply(msg)
    }
}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^google?$/i


export default handler