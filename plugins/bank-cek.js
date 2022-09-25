let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
┏────▩ *BANK 🏦* 
┠☉ *ɴᴀᴍᴇ:* ${user.registered ? user.name : conn.getName(m.sender)}
┠☉ *ᴀᴛᴍ:* ${user.atm > 0 ? 'Level ' + user.atm : 'Tidak Punya'}
┠☉ *ʙᴀɴᴋ:* ${user.bank} / ${user.fullatm}
┠☉ *ᴍᴏɴᴇʏ:* ${user.money}
┠☉ *ʀᴏʙᴏ:* ${user.robo > 0 ? 'Level ' + user.robo : 'Tidak Punya'}
┠☉ *sᴛᴀᴛᴜs:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
┠☉ *ʀᴇɢɪsᴛᴇʀᴇᴅ:* ${user.registered ? 'Yes':'No'}
┗────────────────┈
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler