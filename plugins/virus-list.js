let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          

`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "𝗩𝗜𝗥𝗧𝗘𝗫 1", rowId: '.virtex1', description: 'Use Well' },
	    {title: "𝗩𝗜𝗥𝗧𝗘𝗫 2", rowId: '.virtex2', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 3", rowId: '.virtex3', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 4", rowId: '.virtex4', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 5", rowId: '.virtex5', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 6", rowId: '.virtex6', description: 'Use Well' },
    {title: "𝗩𝗜𝗥𝗧𝗘𝗫 7", rowId: '.virtex7', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 8", rowId: '.virtex8', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 9", rowId: '.virtex9', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 10", rowId: '.virtex10', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 11", rowId: '.virtex11', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 12", rowId: '.virtex12', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 13", rowId: '.virtex13', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 14", rowId: '.virtex14', description: 'Use Well' },
    {title: "𝗩𝗜𝗥𝗧𝗘𝗫 15", rowId: '.virtex15', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 16", rowId: '.virtex16', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 17", rowId: '.virtex17', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 18", rowId: '.virtex18', description: 'Use Well' },
	{title: "𝗩𝗜𝗥𝗧𝗘𝗫 19", rowId: '.virtex19', description: 'Use Well' },
    {title: "𝗩𝗜𝗥𝗧𝗘𝗫 20", rowId: '.virtex20', description: 'Use Well' },
 ]      
 },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "CHOOSE OPTION",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = false
handler.register = true
export default handler