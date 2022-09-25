let handler  = async (m, { conn, command, args, usedPrefix }) => {
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
    try {
        let msgkurang = (pickRandom(['*Potionmu Tidak Cukup*', '*Gak Cukup Potionnya*', '*Gak Cukup*', '*Beli Potion Dulu, Potionmu Gak Cukup*', '*Potionmu Kurang*', '*Beli Potion, Mau Pakai Potion Tapi Gak Ada Potionnnya*', '*Minta TF Potion, Biar Potionmu Gak Kurang*', 'Beli Potion Dulu*']))
        let msgpenuh = (pickRandom(['*HPmu Sudah Penuh*', '*Coba Liat HPMu Mu, HPmu Sudah 100*', '*HPmu Sudah Penuh*', 'HPmu Dah Penuh*']))
        let kucing = global.db.data.users[m.sender].kucing
        let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '')
        let healt = global.db.data.users[m.sender].healt
        if (/use|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                 let msgsucces = (pickRandom(['*Success Memakai', '*Nice Succes Menggunakan', '*Berhasil Meminum ', '*Primitif Anda Menggunakan', '*Anda Memakai', '*Anda Menggunakan']) + ' ' + (count * 1) + ` ${rpg.emoticon('potion')}Potion*`)
                 if (args[0] === 'potion') {
                    if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].potion -= count * 1
                            global.db.data.users[m.sender].healt += usepotion * count
                            conn.sendButton(m.chat, msgsucces, wm, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', usedPrefix + 'inv'], ['𝗔𝗗𝗩𝗘𝗡𝗧𝗨𝗥𝗘', usedPrefix + 'work']], m)
                        } else conn.sendButton(m.chat, msgkurang, wm, null, [['𝗕𝗨𝗬 𝗣𝗢𝗧𝗜𝗢𝗡', usedPrefix + 'beli potion'], ['𝗖𝗛𝗘𝗖𝗞 𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', usedPrefix + 'inv']], m)
                    } else conn.sendButton(m.chat, msgpenuh, wm, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', usedPrefix + 'inv'], ['𝗔𝗗𝗩𝗘𝗡𝗧𝗨𝗥𝗘', usedPrefix + 'work']], m)
                } else if (args.length > 2 && args[0] === !'potion') conn.sendButton(m.chat, pickRandom(['*Hanya Bisa Menggunakan Potion*', '*Can Only Use Potions*']) + '\nContoh penggunaan: *' + usedPrefix + 'use potion 1*', wm, null, [['𝗨𝗦𝗘 𝗢𝗡𝗘 𝗣𝗢𝗧𝗜𝗢𝗡', usedPrefix + 'use potion 1'], ['𝗨𝗦𝗘 𝗧𝗪𝗢 𝗣𝗢𝗧𝗜𝗢𝗡', usedPrefix + 'use potion 2']], m)
            } catch (e) {
                console.log(e)
                throw msgerror
            }
        } else if (/heal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                let msgsucces = (pickRandom(['*Success Memakai', '*Nice Succes Menggunakan', '*Berhasil Meminum ', '*Primitif Anda Menggunakan', '*Anda Memakai', '*Anda Menggunakan']) + ' ' + (count * 1) + ` ${rpg.emoticon('potion')}Potion*`)
                if (global.db.data.users[m.sender].healt < 100) {
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[m.sender].healt += usepotion * count
                        conn.sendButton(m.chat, msgsucces, wm, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', usedPrefix + 'inv'], ['𝗔𝗗𝗩𝗘𝗡𝗧𝗨𝗥𝗘', usedPrefix + 'work']], m)
                    } else conn.sendButton(m.chat, msgkurang, wm, null, [['𝗕𝗨𝗬 𝗣𝗢𝗧𝗜𝗢𝗡', usedPrefix + 'beli potion'], ['𝗖𝗛𝗘𝗖𝗞 𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', usedPrefix + 'inv']], m)
                } else conn.sendButton(m.chat, msgpenuh, wm, null, [['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', usedPrefix + 'inv'], ['𝗔𝗗𝗩𝗘𝗡𝗧𝗨𝗥𝗘', usedPrefix + 'work']], m)
            } catch (e) {
                console.log(e)
                throw msgerror
            }
        }
    } catch (e) {
        console.log(e)
        throw msgerror
    }
}

handler.help = ['use <item> <jumlah>']
handler.tags = ['rpg']
handler.command = /^(use)/i

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
