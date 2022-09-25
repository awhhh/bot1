import fetch from 'node-fetch'

let handler = async (m, {text, usedPrefix, command, conn}) => {
let noteks = 'Kosong'
  if (!text) throw `Contoh Penggunaan ${usedPrefix}${command} Free Fire`
  
  if (command == 'apkdone') {
  let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍' + v.apps_name,
		description: '\n*• ᴠᴇʀsɪᴏɴ:* ' + v.apps_version + '\n*• ʀᴀᴛᴇ:* ' + v.apps_rate + '\n*• ᴛᴀɢs:* ' + v.apps_tag + '\n\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkgoogle') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ᴠᴇʀsɪᴏɴ:* ' + noteks + '\n*• ʀᴀᴛᴇ:* ' + noteks + '\n*• ᴛᴀɢs:* ' + v.apps_tag + '\n\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkmody') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ᴠᴇʀsɪᴏɴ:* ' + noteks + '\n*• ʀᴀᴛᴇ:* ' + noteks + '\n*• ᴅᴇsᴄ:*: ' + v.desc + '\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkshub') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ᴠᴇʀsɪᴏɴ:* ' + noteks + '\n*• ʀᴀᴛᴇ:* ' + noteks + '\n*• ᴠɪᴇᴡ:* ' + v.apps_views + '\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'happymod') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ᴠᴇʀsɪᴏɴ:* ' + noteks + '\n*• ʀᴀᴛᴇ:* ' + v.apps_rate + '\n*• ᴠɪᴇᴡ:* ' + v.apps_views + '\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'hostapk') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ʀᴇʟᴇᴀsᴇᴅ:* ' + v.apps_released + '\n*• ᴀᴜᴛʜᴏʀ:* ' + v.apps_author + '\n*• ᴅᴇsᴄ:*: ' + v.apps_desc + '\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'revdl') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ʀᴇʟᴇᴀsᴇᴅ:* ' + noteks + '\n*• ᴀᴜᴛʜᴏʀ:* ' + noteks + '\n*• ᴅᴇsᴄ:*: ' + noteks + '\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'toraccino') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ʀᴇʟᴇᴀsᴇᴅ:* ' + v.apps_upload + '\n*• ᴀᴜᴛʜᴏʀ:* ' + v.apps_author + '\n*• ᴅᴇsᴄ:* ' + v.apps_desc + '\n*• ᴛᴀɢ:* ' + v.apps_tag + '\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'uapkpro') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📍 ' + v.apps_name,
		description: '\n*• ᴠᴇʀsɪᴏɴ:* ' + noteks + '\n*• ʀᴀᴛᴇ:* ' + v.apps_rate + '\n*• ᴠɪᴇᴡ:* ' + v.apps_views + '\n*• ᴜʀʟ:* ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT 🔎`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*📍 Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro'].map(v => v + ' <app>')
handler.command = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['random']

export default handler