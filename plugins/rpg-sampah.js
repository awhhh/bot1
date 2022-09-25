const rewards = {
    exp: 10000,
    money: 30000,
}

const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `*[❗] Anda Sudah Nyampah Klaim Bulanan Ini, Tunggu ${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*––––––『 NYAMPAH 』––––––*', text.trim(), null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', '.inv'], ['𝗠𝗘𝗡𝗨', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['nyampah']
handler.tags = ['rpg']
handler.command = /^(nyampah)$/i

handler.cooldown = cooldown

export default handler