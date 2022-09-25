import { family100 } from '@bochilteam/scraper'
const winScore = 9999
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, '*Selesaikan Dulu Kuis Yang Ini*', this.game[id].msg)
        throw false
    }
    const json = await family100()
    let caption = `
*GAME FAMILY100*

*📔 sᴏᴀʟ:* ${json.soal}

Terdapat *${json.jawaban.length}* Jawaban ${json.jawaban.find(v => v.includes(' ')) ? `
(Beberapa Jawaban Terdapat Spasi)
`: ''}
+${winScore} EXP Setiap Jawaban Benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, author, null, [['𝐌𝐄𝐍𝐘𝐄𝐑𝐀𝐇', 'nyerah']], m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

export default handler