/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"Enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the skill
   
   let skil = text.trim().toLowerCase() // to filter text
     
   if (!skill.includes(skil)) throw `*SELECTION OF SPECIAL SKILLS*\n\nPilih Skill Apa Yang Kamu Inginkan:\n\n${skill.map(skil => `› ${skil}`).join('\n')}

     Cara Penggunaan:
     *${usedPrefix + command} <nameskill>*
     Example:
     *${usedPrefix + command} necromancer*
     `

    if (user.skill == "") {
    user.skill = skil
    m.reply(`*Anda Telah Memilih Skill ${skil}*`)
    } else if (user.skill) {
    m.reply(`*Anda Sudah Punya Skill ${user.skill} Tidak Bisa Diganti*\nSilahkan Reinkarnasi Jika Ingin Ganti`)
   }

}

handler.help = ['selectskill <type>']
handler.tags = ['rpg']
handler.command = /^(slectskill|selectskill)$/i

export default handler
