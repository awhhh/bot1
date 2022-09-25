
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, bottime, `*Tidak Ada Absen Berlangsung*`, `${imgr + '𝐒𝐓𝐀𝐑𝐓 𝐀𝐁𝐒𝐄𝐍𝐓'}`, [
        ['𝐒𝐓𝐀𝐑𝐓 𝐀𝐁𝐒𝐄𝐍𝐓', `${usedPrefix}mulaiabsen`]
    ], m)
        throw false
    }
    
    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu Sudah Absen*'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} ABSEN TANGGAL ${date}*\n
${conn.absen[id][2]}

*${htjava} DAFTAR ABSEN ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${cmenua}
`
await conn.sendButton(m.chat, hiasan, caption, `${imgr + 'Absen'}`, [['𝐇𝐀𝐃𝐈𝐑', `${usedPrefix}absen`], ['𝐀𝐁𝐒𝐄𝐍𝐓 𝐋𝐈𝐒𝐓', `${usedPrefix}cekabsen`]], m, { mentions: conn.parseMention(caption) })


}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i

export default handler
