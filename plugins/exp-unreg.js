import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw '*Butuh SN (Serial Number) Untuk Unreg*\n#ceksn Untuk Menampilkan SN-Mu'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '*Invalid SN*\n#ceksn Untuk Menampilkan SN-Mu*'
  user.registered = false
  m.reply('*Kamu Berhasil Batalkan Pendaftaran/Keluar Dari Database BOT*')
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler