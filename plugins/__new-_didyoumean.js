import didyoumean from 'didyoumean'
import similarity from 'similarity'
export async function before(m, { match, usedPrefix, command }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
		let name = await conn.getName(who)
		let caption = `👋 Hai @${who.split("@")[0]},\n\n ◙ Mungkin Maksud Kamu *${usedPrefix + mean}* ?\n\n◙ Hasil Kemiripan *${parseInt(som)}%*\n\n`
	if (mean) this.sendButton(m.chat, '𝗕𝗔𝗡𝗧𝗨𝗔𝗡', caption, thumbDidyou, [['𝐈𝐲𝐚, 𝐁𝐞𝐧𝐚𝐫 ✔', `${usedPrefix + mean} ${text}`], ['𝐁𝐮𝐤𝐚𝐧 ✖', usedPrefix + '?'], ['𝐌𝐮𝐧𝐠𝐤𝐢𝐧', 'huuu']], m, { mentions: this.parseMention(caption) })
	}
}
export const disabled = false