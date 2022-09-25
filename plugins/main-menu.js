// MADE BY BOCHILGAMING
// RECODE BY FANGZ 

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `

%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'store', 'virus', 'thnks']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  'store': 'Store Menu',
  'virus': '𐐪-〚 Virtex 〛-𐑂',
  'thnks': 'Thanks To',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
 }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
 }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'virus') tags = {
    'virus': '𐐪-〚 Virtex 〛-𐑂'
 }
  if (teks == 'thnks') tags = {
    'thnks': '𐐪-〚 Thanks To 〛-𐑂'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `${htki} 𝗔𝗕𝗢𝗨𝗧 𝗕𝗢𝗧 ${htka}`,
	rows: [
	    {title: `𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ℹ️ `, rowId: ".info", description: "• ɪɴғᴏʀᴍᴀsɪ ᴛᴇɴᴛᴀɴɢ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ"},
	    {title: `𝗢𝗪𝗡𝗘𝗥 👤`, rowId: ".owner", description: "• ɪɴғᴏʀᴍᴀsɪ ᴛᴇɴᴛᴀɴɢ ᴏᴡɴᴇʀ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ"},
	{title: `𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗦 📊`, rowId: ".botinfo", description: "• sᴛᴀᴛɪsᴛɪᴋ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ"},
	{title: `𝗧𝗘𝗦𝗧 𝗦𝗣𝗘𝗘𝗗 ⚡`, rowId: ".testspeed", description: "• ᴋᴇᴄᴇᴘᴀᴛᴀɴ sᴇʀᴠᴇʀ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ"},
	{title: `𝗦𝗣𝗘𝗘𝗗 ⏩`, rowId: ".speed", description: "• ᴋᴇᴄᴇᴘᴀᴛᴀɴ ʀᴇsᴘᴏɴ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ"},
    {title: `𝗦𝗘𝗪𝗔 𝗕𝗢𝗧 🏷️`, rowId: ".sewa", description: "• ᴊɪᴋᴀ ɪɴɢɪɴ sᴇᴡᴀ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ ᴍᴀsᴜᴋ ɢʀᴜᴘ-ᴍᴜ"},
    {title: `𝗨𝗣 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, rowId: ".premium", description: "• ᴍᴇɴᴊᴀᴅɪ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ"},
    {title: `𝗥𝗔𝗧𝗜𝗡𝗚 ⭐`, rowId: ".rate", description: '• ᴍᴇɴɪʟᴀɪ ʙᴏᴛ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ'},
    {title: `𝗘𝗩𝗘𝗡𝗧 🎉`, rowId: ".event", description: "• ᴀᴄᴀʀᴀ ʏᴀɴɢ ʙᴇʀᴊᴀʟᴀɴ"},
    {title: `𝗥𝗨𝗟𝗘𝗦 🚨`, rowId: ".rules", description: `• s&ᴋ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ`},
    {title: `𝗗𝗢𝗡𝗔𝗦𝗜 💱`, rowId: ".donasi", description: '• ᴅᴏɴᴀsɪ ᴀɢᴀʀ ⌬ ғᴇʟɪᴄɪᴀ-ᴍᴅ ʟᴇʙɪʜ ʙᴇʀᴋᴇᴍʙᴀɴɢ'},
    {title: `𝗚𝗥𝗢𝗨𝗣 👥`, rowId: ".groupbot", description: '• ⚠️ ᴡᴀᴊɪʙ ʙᴇʀɢᴀʙᴜɴɢ'},
	]
    },{
	title: `${htki} 𝗠𝗘𝗡𝗨 𝗢𝗣𝗧𝗜𝗢𝗡𝗦 ${htka}`,
	rows: [
	    {title: `𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 📚`, rowId: ".? all", description: "• sᴇᴍᴜᴀ ᴋᴜᴍᴘᴜʟᴀɴ ᴍᴇɴᴜ "},
	    {title: `𝗥𝗣𝗚 ⚔️`, rowId: ".? rpg", description: "• ʀᴏʟᴇ ᴘʟᴀʏɪɴɢ ɢᴀᴍᴇ"},
	{title: `𝗘𝗫𝗣 ✨`, rowId: ".? xp", description: "• ᴇxᴘ ᴀᴅᴀʟᴀʜ ᴘᴇɴɢᴀʟᴀᴍᴀɴ"},
	{title: `𝗚𝗔𝗠𝗘 🎮`, rowId: ".? game", description: "• ɢᴀᴍᴇ ᴅᴀʀɪ ʙᴏᴛ ɪɴɪ"},
	{title: `𝗙𝗨𝗡 🕹️`, rowId: ".? fun", description: "• ʙᴇʀsᴇɴᴀɴɢ-sᴇɴᴀɴɢ ᴍᴇɴɢɪsɪ ᴋᴇɢᴀʙᴜᴛᴀɴ"},
	{title: `𝗞𝗘𝗥𝗔𝗡𝗚 🐚`, rowId: ".? kerangajaib", description: "• ᴛᴀɴʏᴀ sᴇsᴜᴀᴛᴜ ᴋᴇ ʙᴏᴛ"},
	{title: `𝗤𝗨𝗢𝗧𝗘𝗦 📝`, rowId: ".? quotes", description: "• ᴋᴜᴛɪᴘᴀɴ ʟᴇɴɢᴋᴀᴘ ʜᴀʀɪᴀɴ"},
	{title: `𝗔𝗡𝗜𝗠𝗘 🇯🇵`, rowId: ".? anime", description: "• ᴜɴᴛᴜᴋ ᴀɴɪᴍᴇʟᴏᴠᴇʀ & ᴍᴀɴɢᴀʟᴏᴠᴇʀ"},
	{title: `𝗡𝗦𝗙𝗪 🔞`, rowId: ".? nsfw", description: "• ɴsғᴡ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ 18+"},
	{title: `𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🤴`, rowId: ".? premium", description: "• ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀ"},
	{title: `𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 🕵️‍♂️`, rowId: ".? anonymous", description: "• ғɪᴛᴜʀ sᴇᴘᴇʀᴛɪ ᴛᴇʟᴇɢʀᴀᴍ"},
	{title: `𝗜𝗦𝗟𝗔𝗠𝗜𝗖 ☪️`, rowId: ".? quran", description: "• ᴜɴᴛᴜᴋ ᴏʀᴀɴɢ ᴍᴜsʟɪᴍ"},
	{title: `𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 🌐`, rowId: ".? internet", description: "• ᴍᴇɴᴊᴇʟᴀᴊᴀʜɪ ᴅᴜɴɪᴀ ᴍᴀʏᴀ"},
	{title: `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ⏬`, rowId: ".? downloader", description: "• ᴍᴇɴɢᴜɴᴅᴜʜ ʟᴇᴡᴀᴛ ʙᴏᴛ"},
	{title: `𝗦𝗧𝗜𝗖𝗞𝗘𝗥 🔣`, rowId: ".? stiker", description: "• ᴍᴇʀᴀᴋɪᴛ sᴛɪᴄᴋᴇʀ sᴇɴᴅɪʀɪ"},
	{title: `𝗠𝗘𝗡𝗨𝗟𝗜𝗦  ✍️`, rowId: ".? nulis", description: "• ᴅɪᴛᴜʟɪsᴋᴀɴ ᴏʟᴇʜ ʙᴏᴛ"},
	{title: `𝗔𝗨𝗗𝗜𝗢 🎶`, rowId: ".? audio", description: "• ᴍᴇᴍʙᴇʀɪ ᴇғᴇᴋ sᴜᴀʀᴀ ᴋᴇ ᴀᴜᴅɪᴏ"},
	{title: `𝗚𝗥𝗢𝗨𝗣 👫`, rowId: ".? group", description: "• ᴜɴᴛᴜᴋ ᴅɪ ɢʀᴜᴘ sᴀᴊᴀ"},
	{title: `𝗔𝗗𝗠𝗜𝗡 👦`, rowId: ".? admin", description: "• ᴜɴᴛᴜᴋ ᴅɪ ᴀᴅᴍɪɴ ɢʀᴜᴘ sᴀᴊᴀ"},
	{title: `𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 📂`, rowId: ".? database", description: "• ᴘᴇɴʏɪᴍᴘᴀɴᴀɴ ᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ"},
	{title: `𝗧𝗢𝗢𝗟𝗦 ⚒️`, rowId: ".? tools", description: "• ᴘᴇʀᴀʟᴀᴛᴀɴ ᴅᴀʀɪ ʙᴏᴛ"},
	{title: `️️𝗜𝗡𝗙𝗢 📇`, rowId: ".? info", description: "• ᴍᴇɴᴄᴀʀɪ ɪɴғᴏʀᴍᴀsɪ ᴅᴜɴɪᴀ"},
	{title: `𝗢𝗪𝗡𝗘𝗥 👤`, rowId: ".? owner", description: "• ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴘᴇᴍɪʟɪᴋ & ᴘᴇɴɢᴇᴍʙᴀɴɢ ʙᴏᴛ"},
	{title: `𝗠𝗔𝗞𝗘𝗥 🎨`, rowId: ".? maker", description: "• ᴍᴇᴍʙᴜᴀᴛ ʟᴏɢᴏ ᴍᴇɴᴀʀɪᴋ"},
	{title: `𝗦𝗧𝗢𝗥𝗘 🛍️`, rowId: ".? store", description: "• ᴋʜᴜsᴜs ᴜɴᴛᴜᴋ sᴇʟʟᴇʀ ᴀɴᴅ ʙᴜʏᴇʀ"},
	{title: `𝗩𝗜𝗥𝗧𝗘𝗫 ✒️`, rowId: ".? virus", description: "• ᴠɪʀᴜs ᴡʜᴀᴛsᴀᴘᴘ"},
	]
    }
]

let usrs = db.data.users[m.sender]
/**************************** TIME *********************/
 let wib = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Makassar').format('HH')
    let wibm = moment.tz('Asia/Makassar').format('mm')
    let wibs = moment.tz('Asia/Makassar').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
let tek = `
*📊 DASHBOARD ⌬ Felicia-MD 📊*

*INFO USER*
*⬡ ɴᴀᴍᴇ:* ${await conn.getName(m.sender)}*
*⬡ ʟᴇᴠᴇʟ:* ${usrs.level}
*⬡ ʀᴏʟᴇ:* ${usrs.role}
*⬡ ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}* 
*⬡ sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}* 
*⬡ ᴀᴘɪ:* @${m.sender.split`@`[0]}

*INFO BOT*
*⬡ ᴜᴘᴛɪᴍᴇ:* ${mpt}
*⬡ ʀᴇɢɪsᴛᴇʀ: ${Object.values(global.db.data.users).filter(user => user.registered == true).length}
*⬡ ᴜɴʀᴇɢ:* ${Object.keys(global.db.data.users).length}
*⬡ ᴏs ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}

*TIME*
*⬡ ᴡɪʙ:* ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
*⬡ ᴡɪᴛᴀ:* ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
*⬡ ᴡɪᴛ:* ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
*⬡ ᴅᴀᴛᴇ:* ${new Date().toLocaleDateString()}

`
const listMessage = {
  text: tek,
  footer: '© 么 Kitsuneee | REVOLUTION',
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗜𝗘𝗦`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
    
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender) 
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { day: 'numeric' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    const _0x187932 = _0x5c09;

function _0x5c09(_0x28b840, _0x244043) {
	const _0x1766bb = _0x1766();
	return _0x5c09 = function(_0x5c09dc, _0x158321) {
		_0x5c09dc = _0x5c09dc - 0x1bb;
		let _0x4031df = _0x1766bb[_0x5c09dc];
		return _0x4031df;
	}, _0x5c09(_0x28b840, _0x244043);
}(function(_0x1c9e83, _0x2eef01) {
	const _0x5e85ab = _0x5c09, _0x179660 = _0x1c9e83();
	while ( !! []) {
		try {
			const _0x4c7814 = -parseInt(_0x5e85ab(0x1d0)) / 0x1 * (-parseInt(_0x5e85ab(0x1bd)) / 0x2) + parseInt(_0x5e85ab(0x1c4)) / 0x3 * (parseInt(_0x5e85ab(0x1bf)) / 0x4) + parseInt(_0x5e85ab(0x1cc)) / 0x5 * (-parseInt(_0x5e85ab(0x1d1)) / 0x6) + parseInt(_0x5e85ab(0x1c1)) / 0x7 * (parseInt(_0x5e85ab(0x1bc)) / 0x8) + parseInt(_0x5e85ab(0x1cd)) / 0x9 * (-parseInt(_0x5e85ab(0x1c7)) / 0xa) + parseInt(_0x5e85ab(0x1cb)) / 0xb * (-parseInt(_0x5e85ab(0x1be)) / 0xc) + parseInt(_0x5e85ab(0x1ce)) / 0xd;
			if (_0x4c7814 === _0x2eef01) break;
			else _0x179660['push'](_0x179660['shift']());
		} catch (_0x2b3360) {
			_0x179660['push'](_0x179660['shift']());
		}
	}
}(_0x1766, 0x70ad5));
let buttonMessage = {
	'document': {
		'url': sig
	},
	'mimetype': td,
	'fileName': global['hiasan'],
	'fileLength': fsizedoc,
	'pageCount': fpagedoc,
	'contextInfo': {
		'forwardingScore': 0x22b,
		'isForwarded': !! [],
		'externalAdReply': {
			'mediaUrl': global['sig'],
			'mediaType': 2,
			'previewType': _0x187932(0x1c9),
			'title': wm,
			'body': global['bottime'],
			'thumbnail': await (await fetch(thumb)).buffer(),
			'sourceUrl': sig
		}
	},
	'caption': text,
	'footer': dmenuf,
	'buttons': [{
		'buttonId': '.report',
		'buttonText': {
			'displayText': '🍭CUSTOMER SERVICE'
		},
		'type': 1
	}, {
		'buttonId': '.testspeed',
		'buttonText': {
			'displayText': '🥞SPEED NET'
		},
		'type': 1
	}, {
		'buttonId': '.sc',
		'buttonText': {
			'displayText': '📑SCRIPT BOT'
		},
		'type': 1
	}],
	'headerType': 6
};
/*
await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)], buttonMessage, {
	'quoted': m,
	'mentionedJid': [m[_0x187932(0x1c3)]]
});
*/

	/** Baru */
	let img = fs.readFileSync('./img/atas.png')
	let img2 = fs.readFileSync('./img/bawah.png')
	return conn.sendButton(m.chat, '.', text, img2, [["𝙎𝙀𝙒𝘼 𝘽𝙊𝙏", _p + "sewabot"], ["𝙀𝙑𝙀𝙉𝙏", _p + "event"], ["𝙊𝙒𝙉𝙀𝙍", _p + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/fangzganz?igshid=YmMyMTA2M2Y=",
                mediaType: "VIDEO",
                title: `Hallo ${name} ${ucpn}`,
                body: 'Bot By 么 Kitsuneee',
                previewType: 0,
                thumbnail: img
            }
        }
    })


function _0x1766() {
	const _0x1c60e8 = ['3ezQcUH', '.nameown', '.cekversi', '725770ccnUBU', 'sgc', 'pdf', 'buffer', '305624SHQwwY', '233195fjGJSZ', '72BjUaMS', '2869867kBKaey', 'chat', '6NokiEm', '72PsFaxu', '🎐Sewa Bot', '1832yREmVQ', '205026IsvCrH', '132IBvmfp', '3329164htczQJ', '🌹Author', '7315FCLnNH', 'sendMessage', 'sender'];
	_0x1766 = function() {
		return _0x1c60e8;
	};
	return _0x1766();
}
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\n⚡ Supported By Fangz TEAM',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://fangzbot.websites.co.in/'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🎐Sewa Bot',
                        id: '.sewa'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🌹Author',
                        id: '.nameown'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🎀Version Bot',
                        id: '.versibot'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    
  } catch (e) { 
     conn.reply(m.chat, 'Maaf, menu sedang error', m) 
     throw e 
   } 
 } 
 handler.help = ['menu', 'help', '?'] 
 handler.tags = ['main'] 
 handler.command = /^(menu|help|\?)$/i 
  
 handler.register = true 
 handler.exp = 3 
  
 export default handler
//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Makassar').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}