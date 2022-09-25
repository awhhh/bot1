import fetch from 'node-fetch'
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {
	if (!args[0]) return conn.reply(m.chat, `Silahkan Masukan Pesannya\nContoh Penggunaan: *${usedPrefix + command} ${nomorown} pesannya*`, m)
	let mention
    if (m.isGroup) mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else mention = m.sender
	if (!mention) throw '*Tag Salah Satu*'
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let pengirim = m.sender
	let cap = `👋 Saya ${conn.user.name}, Saya Ingin Menyampaikan Pesan Dari Seseorang Untuk Kamu

👤 Sender : Private
⌚ Time    : ${bottime}
📅 Date     : ${botdate}

             *✉️PESANNYA*
⎔══════════════════⎔
 ${txt}
⎔══════════════════⎔

     ▌│█║▌║▌║║▌║▌║█│▌          
`
	let tujuan = `${htki} MENFES ${htka}`
	if (!m.quoted) {
		await conn.sendHydrated(mention, tujuan, cap, thumbmenfes, 'https://wa.me/6285163083750?text=.menfes', '💬 Balas pesan', null, null, [
			[null, null]
		], null)
	} else {
		await conn.sendHydrated(mention, tujuan, cap, thumbmenfes, 'https://wa.me/6285163083750?text=.menfes', '💬 Balas pesan', null, null, [
			[null, null]
		], null)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, true).catch(_ => _)
	}
	let suks = `✅ Berhasil Mengirim Pesan *${mime ? mime : 'Teks'}*`
	await conn.reply(pengirim, suks, m)
}
handler.help = ['menfess <pesan>']
handler.tags = ['main']

handler.private = true

handler.command = /^(men(fess?|cret)|chat)$/i
export default handler