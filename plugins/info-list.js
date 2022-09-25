let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `⌬ Felicia-MD`,
	rows: [
	    {title: "𝗧𝗘𝗦𝗧 𝗦𝗣𝗘𝗘𝗗", rowId: '.testspeed', description: 'Melihat Kecepatan Server abot Bot' },
	    {title: "𝗦𝗧𝗔𝗧 𝗦𝗘𝗥𝗩𝗘𝗥", rowId: '.statserver', description: 'Melihat Statistik Server Bot' },
	    {title: "𝗕𝗢𝗧 𝗜𝗡𝗙𝗢", rowId: '.botinfo', description: 'Melihat Informasi Bot' },
	{title: "𝗖𝗥𝗘𝗔𝗧𝗢𝗥 𝗡𝗔𝗠𝗘", rowId: '.nameown', description: 'Melihat Informasi Creator' },
	{title: "𝗗𝗢𝗡𝗔𝗧𝗘", rowId: '.donasi', description: 'Membantu Bot Lebih Baik' },
	    {title: "𝗥𝗨𝗟𝗘𝗦", rowId: '.rules', description: 'S&K Bot Ini' },
	    {title: "𝗘𝗩𝗘𝗡𝗧", rowId: '.event', description: 'Melihat Event Bot' },
	{title: "𝗦𝗣𝗘𝗘𝗗", rowId: '.speed', description: 'Melihat Kecepatan Respon Bot' },
	{title: "𝗦𝗘𝗪𝗔 𝗕𝗢𝗧", rowId: '.sewa', description: 'Menyewa Bot Masuk Ke Groupmu' },
	{title: "𝗙𝗘𝗔𝗧𝗨𝗥𝗘 𝗥𝗘𝗤𝗨𝗘𝗦𝗧", rowId: '.request', description: 'Request Fitur Impianmu' },
	{title: "𝗕𝗢𝗧 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡", rowId: '.loc2', description: 'Lokasi Bot Saat Ini' },
	{title: "𝗕𝗢𝗧 𝗩𝗘𝗥𝗦𝗜𝗢𝗡", rowId: '.cekversi', description: 'Melihat Versi Bot' },
	{title: "𝗖𝗨𝗦𝗧𝗢𝗠𝗘𝗥 𝗦𝗘𝗥𝗩𝗜𝗖𝗘", rowId: '.complaint', description: 'Melaporkan Keluhanmu Terhadap Bot Ini' },
	{title: "𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗨𝗦", rowId: '.botstats', description: 'Melihat Statistik Bot' },
]
}
]
const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "L I S T",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler