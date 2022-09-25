let handler = async (m, { conn }) => {


let krtu = `
         *「 INTRO CARD 」*
         
*• Nama      :* 
*• Gender    :* 
*• Umur       :* 
*• Hobby     :* 
*• Kelas       :* 
*• Asal         :* 
*• Agama    :* 
*• Status     :* 

http://bīt.ly/ᯤ
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
