const rewards = {
  exp: 30000,
  money: 100000,
  potion: 9,
}
const cooldown = 604800000
let handler = async (m) => {
  let imgr = flaaa.getRandom
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastweekly < cooldown) throw `*[❗] Anda Telah Mengklaim Klaim Weekly Ini.*\nTunggu *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,`${htki} WEEKLY ${htka}`, text.trim(), `${imgr + 'Weekly'}`, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'], ['𝗠𝗢𝗡𝗧𝗛𝗟𝗬', '.monthly']],m)
  user.lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i
handler.register = true
handler.limit = true
handler.cooldown = cooldown

export default handler