/*
By : Fangz
*/
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  

  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('*Terdeteksi Telah mengirim Sticker📡*\n*Kamu Akan Di Keluarkan!*') // ganti text terserah kamu 
          this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }return true
      }
    }
  }
  return true
}

export default handler 
