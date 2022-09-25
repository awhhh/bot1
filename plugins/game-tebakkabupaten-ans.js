import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hkab/i.test(m.quoted.text) || /.*hkab/i.test(m.text))
        return !0
    this.tebakkabupaten = this.tebakkabupaten ? this.tebakkabupaten : {}
    if (!(id in this.tebakkabupaten))
        return conn.sendButton(m.chat, '*Soal Itu Telah Berakhir*', author, null, buttontebakkabupaten, m)
    if (m.quoted.id == this.tebakkabupaten[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakkabupaten[id][3])
            delete this.tebakkabupaten[id]
            return conn.sendButton(m.chat, '*Menyerah Ya.*', author, null, buttontebakkabupaten, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakkabupaten[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.title.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkabupaten[id][2]
            conn.sendButton(m.chat, `*✅BENAR*\n+${this.tebakkabupaten[id][2]} XP`, author, null, buttontebakkabupaten, m)
            clearTimeout(this.tebakkabupaten[id][3])
            delete this.tebakkabupaten[id]
        } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold)
            m.reply(`*Hampir Benar*`)
        else
            conn.sendButton(m.chat, `*Salah*`, author, null, [
                ['🔎', '/hkab'],
                ['𝐍𝐘𝐄𝐑𝐀𝐇', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakkabupaten = [
    ['𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐁𝐔𝐏𝐀𝐓𝐄𝐍', '/tebakkabupaten']
]