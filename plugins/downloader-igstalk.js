import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example ${usedPrefix}${command} <username>`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
await conn.sendHydrated(m.chat, `${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* ғᴏʟʟᴏᴡᴇʀs
*${followingH}* ғᴏʟʟᴏᴡɪɴɢ
*${postsH}* ᴘᴏsᴛ
*ʙɪᴏ:* ${description}
`.trim(), botdate, null, 'https://www.whatsapp.com/otp/copy/' + 'https://instagram.com/' +username.replace(/^@/, ''), 'C O P Y', nomorown, nameown, [
      ['𝐌𝐄𝐍𝐔', '/menu']
    ], null)
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

export default handler