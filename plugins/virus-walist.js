let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS IMMUNITY ${htka}*
                           
–––––– *KEBIJAKAN* ––––––

*Jangan Merugikan Orang Lain Tanpa Alasan*
`
const sections = [
   {
    title: `Options`,
	rows: [
	    {title: "WhatsApp Imune 1", rowId: '.waimune1', description: ' ' },
	    {title: "WhatsApp Imune 2", rowId: '.waimune2', description: ' ' },
	{title: "WhatsApp GB Kebal 1", rowId: '.wagb1', description: ' ' },
	{title: "WhatsApp GB Kebal 2", rowId: '.wagb2', description: ' ' },
	]
    }, {
    title: ` `,
	rows: [
	    {title: "𝗠𝗘𝗡𝗨", rowId: '.menu', description: ' ' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Download",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['waantivirus']
handler.tags = ['viruss']
handler.command = /^hshsj$/i
handler.premium = false
handler.register = true
handler.limit = true
export default handler