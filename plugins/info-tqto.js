import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let imgr = flaaa.getRandom()
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `𝗧𝗵𝗮𝗻𝗸𝘀 𝗙𝗼𝗿:\n\n• ғᴏᴋᴜs ɪᴅ\n• ᴛʜᴇ.sᴀᴅ.ʙᴏʏ01\n• ᴋᴀɴɴᴀ\n• ᴋɪᴛsᴜɴᴇᴇᴇ\n• ғᴀɴɢᴢxᴅ\n• ʙᴏᴛ ᴜsᴇʀ\n• ɴᴜʀᴜᴛᴏᴍᴏ\n• ʙᴏᴄʜɪʟɢᴀᴍɪɴɢ\n• ɪʟʜᴀᴍ\n• ᴀᴍɪʀᴜʟ\n• ʀᴀsᴇʟ\n
 `,dmenuf + '\n\n' + cmenua, `${imgr + 'Thanks To'}`, [['𝗦𝗜𝗣','Ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: '么 Kitsuneee',          previewType: 0,
                        jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
                        sourceUrl: swb
                      }}
})
}


handler.help = ['tqto', 'contributor']
handler.tags = ['info','main']
handler.command = /^(tqto|thanksto|contributor)$/i
handler.private = false

export default handler