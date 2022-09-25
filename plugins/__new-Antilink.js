const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri
const isLinkWa = /wa.me/i // tambahin sendiri
const isLinkHttp = /http|https/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)
    const isAntiLinkHttp = isLinkHttp.exec(m.text)

    if (chat.antiLinkTik && isAntiLinkTik) {
        await conn.sendButton(m.chat, `*〘 TIKTOK LINK DETECTED 〙*\n\n*${isBotAdmin ? '' : '_Bot Bukan Admin, Tidak Bisa Kick_'}`, author, ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐓𝐓', '/disable antilinktik'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButton(m.chat, `*〘 TIKTOK LINK DETECTED 〙*\n\n◉ Limit Anda Di Reset Ke 0 🎟️\n◉ Warn +1 ⚠️\n◉ + Banned Pengirim ⛔\n
    Karena Mengirim Link Tiktok
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsbdj`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    
    if (chat.antiLinkYt && isAntiLinkYt) {
        await conn.sendButton(m.chat, `*〘 YOUTUBE LINK DETECTED 〙*\n\n*${isBotAdmin ? '' : '_Bot Bukan Admin, Tidak Bisa Kick_'}`, author, ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐘𝐓', '/disable antilinkyt'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButton(m.chat, `*〘 YOUTUBE LINK DETECTED 〙*\n\n◉ Limit Anda Di Reset Ke 0 🎟️\n◉ Warn +1 ⚠️\n◉ + Banned Pengirim ⛔\n
    Karena Mengirim Link Youtube
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsbdj`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        await conn.sendButton(m.chat, `*〘 TELEGRAM LINK DETECTED 〙*\n\n*${isBotAdmin ? '' : '_Bot Bukan Admin, Tidak Bisa Kick_'}`, author, ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐓𝐄𝐋𝐄', '/disable antilinktel'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButton(m.chat, `*〘 TELEGRAM LINK DETECTED 〙*\n\n◉ Limit Anda Di Reset Ke 0 🎟️\n◉ Warn +1 ⚠️\n◉ + Banned Pengirim ⛔\n
    Karena Mengirim Link Telegram
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsbdj`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        await conn.sendButton(m.chat, `*〘 FACEBOOK LINK DETECTED 〙*\n\n*${isBotAdmin ? '' : '_Bot Bukan Admin, Tidak Bisa Kick_'}`, author, ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐅𝐁', '/disable antilinkfb'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButton(m.chat, `*〘 FACEBOOK LINK DETECTED 〙*\n\n◉ Limit Anda Di Reset Ke 0 🎟️\n◉ Warn +1 ⚠️\n◉ + Banned Pengirim ⛔\n
    Karena Mengirim Link Facebook
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsbdj`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg) {
        await conn.sendButton(m.chat, `*〘 INSTAGRAM LINK DETECTED 〙*\n\n*${isBotAdmin ? '' : '_Bot Bukan Admin, Tidak Bisa Kick_'}`, author, ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐈𝐆', '/disable antilinkig'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButton(m.chat, `*〘 INSTAGRAM LINK DETECTED 〙*\n\n◉ Limit Anda Di Reset Ke 0 🎟️\n◉ Warn +1 ⚠️\n◉ + Banned Pengirim ⛔\n
    Karena Mengirim Link Instagram
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsbdj`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    
    if (chat.antiLinkWa && isAntiLinkWa) {
        await conn.sendButton(m.chat, `*〘 WA.ME LINK DETECTED 〙*\n\n*${isBotAdmin ? '' : '_Bot Bukan Admin, Tidak Bisa Kick_'}`, author, ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐖𝐀.𝐌𝐄', '/disable antilinkwa'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButton(m.chat, `*〘 WA.ME LINK DETECTED 〙*\n\n◉ Limit Anda Di Reset Ke 0 🎟️\n◉ Warn +1 ⚠️\n◉ + Banned Pengirim ⛔\n
    Karena Mengirim Link Wa.me
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsbdj`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    
    if (chat.antiLinkHttp && isAntiLinkHttp) {
        await conn.sendButton(m.chat, `*〘 HTTP LINK DETECTED 〙*\n\n*${isBotAdmin ? '' : '_Bot Bukan Admin, Tidak Bisa Kick_'}`, author, ['𝐃𝐈𝐒𝐀𝐁𝐋𝐄 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐇𝐓𝐓𝐏', '/disable antihatetepe'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButton(m.chat, `*〘 HTTP LINK DETECTED 〙*\n\n◉ Limit Anda Di Reset Ke 0 🎟️\n◉ Warn +1 ⚠️\n◉ + Banned Pengirim ⛔\n
    Karena Mengirim Link Http
    Ketik *.limit* Untuk Cek Limit`, wm, null, [
        ['𝐊𝐚𝐬𝐢𝐚𝐧', `${usedPrefix}jsjsbdj`]
    ], m)
        } else if (!bot.restrict) return m.reply('*Tidak Bisa diKick*')
    }
    return !0
}