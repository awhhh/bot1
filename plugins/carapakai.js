let handler  = async (m, { conn, usedPrefix }) => { 
   conn.reply(m.chat, ` 
 ╭─「 *TUTORIAL MAIN RPG* 」 
 │  
 │• *${usedPrefix}claim* 
 │   Staterpack Yang Bisa Di Klaim 
 │   12 Jam Sekali 
 │• *${usedPrefix}mulung* 
 │• *${usedPrefix}adventure* 
 │• *${usedPrefix}petualang* 
 │   Untuk Mencari resource seperti  
 │   Money, Exp, Dll..,Dibutuhkan   
 │   Minimal 80 Nyawa Untuk Bisa  
 │   Melakukannya Dan, Kamu Tidak  
 │   Dapat Spam Karena Ada Delay 5  
 │   Menit 
 │• *${usedPrefix}use potion <jumlah>* 
 │   Untuk Memakai Potion/Untuk  
 │   Mengisi Nyawa/Health 
 │• *${usedPrefix}shop buy potion <jumlah>* 
 │   Untuk Membeli Potion Dan Ketik  
 │   *${usedPrefix}use potion <jumlah>* 
 │   Untuk Menggunakan Potion 
 │• *${usedPrefix}shop <args>* 
 │   Untuk Membeli Atau Menjual Sesuatu 
 │• *${usedPrefix}shop buy <crate> <jumlah>* 
 │   Untuk Membeli Crate 
 │• *${usedPrefix}profile* 
 │• *${usedPrefix}pp* 
 │• *${usedPrefix}profil* 
 │   Untuk Mengetahui No Whatsapmu, dll 
 │• *${usedPrefix}inv* 
 │• *${usedPrefix}my* 
 │• *${usedPrefix}bank* 
 │   Untuk Mengecek Nyawa, Money, dll. 
 │• *${usedPrefix}judi <jumlah>* 
 │   Melakukan Judi
 │   
 ╰─────────────────────
 `.trim(), m) 
 } 
 handler.help = ['tutorial'] 
 handler.tags = ['info','rpg'] 
 handler.command = /^(tutorial)$/i 
 handler.owner = false 
 handler.mods = false 
 handler.premium = false 
 handler.group = false 
 handler.private = false 
  
 handler.admin = false 
 handler.botAdmin = false 
  
 handler.fail = null 
  
 export default handler 