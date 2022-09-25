let handler = async (m, { conn }) => {
let info = `
*${htki} PUSH EXP ${htka}*

*KEUNTUNGAN BERMAIN*

1. Seru
2. Mudah
3. Mendapatkan Banyak Exp
4. Menghilangkan Rasa Gabut

*Tips: Sesuai Untuk Push EXP Santai*
`
const sections = [
   {
	title: `❪ LIST`,
	rows: [
	    {title: "🎮 TEBAK KATA", rowId: '.tebakkata', description: 'Menebak Kata Melalui Ciri-Ciri Kata-nya' },
	    {title: "🎮 TEBAK GAMBAR", rowId: '.tebakgambar', description: 'Menebak Kalimat Melalui Gambar' },
	    {title: "🎮 TEBAK LAGU", rowId: '.tebaklagu', description: 'Menebak Judul Lagu' },
	{title: "🎮 TEBAK JENAKA", rowId: '.tebakjenaka', description: 'Menebak Untuk Sakit' },
	{title: "🎮 TEBAK LOGO", rowId: '.tebaklogo', description: 'Menebak Suatu Logo' }
	]
    }, {
	title: `❪ UNDANG TEMAN`,
	rows: [
	    {title: "💌 REFEREAL", rowId: '.ref', description: 'Udang Temanmu Untuk Bermain Bot Ini (Prize Exp Untukmu Dan Temanmu)' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🎮 𝐂𝐇𝐎𝐎𝐒𝐄 𝐆𝐀𝐌𝐄 🎮",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['listexp']
handler.tags = ['game']
handler.command = /^(listexp)$/i

export default handler