import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '*Hanya Bisa Dilakukan Digrup*'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '*Bot Tidak Berada Digrup Tersebut*'
    if (!me.admin) throw '*Bot Bukan Admin, Tidak Bisa Mendapatkan Tautan*'
    await conn.sendHydrated(m.chat, `*${htki} LINK GROUP ${htka}*`, bottime, null, 'https://www.whatsapp.com/otp/copy/'+'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), 'C O P Y', swb, wm, [
      ['𝐋𝐈𝐒𝐓 𝐆𝐑𝐎𝐔𝐏', '/listgroup'],
      ['𝐈𝐍𝐅𝐎 𝐆𝐑𝐎𝐔𝐏', '/infogrup']
    ], null)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i


export default handler