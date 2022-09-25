
import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from "fs"

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan*

${usedPrefix + command} attp teks

*List Command*
• ahegao
• aneh
• anime
• anony
• ass
• attp
• bdsm
• bijak
• blowjob
• bonk
• bucin
• bully
• cecans
• chobay
• chord
• corohelp
• cry
• cuaca
• cuckold
• cuddle
• cum
• cuttly
• dance
• dare
• darkjokes
• detik
• ero
• femdom
• font
• font2
• foot
• gambar
• gangbang
• githubstalk
• glasses
• harley
• hentai
• hentaigif
• hijaber
• hug
• islami
• jahy
• joker
• lick
• masturbation
• megumin
• motivasi
• neko
• nekonime
• nulis
• nulis2
• orgy
• panties
• pantun
• pat
• pussy
• shinobu
• slap
• smile
• smug
• thighs
• trut
• ttp
• waifu
• yeet
• yuri
`
conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
            
if (command) {
try {
switch (template) {
            //Hadi
        case 'attp':
        case 'ttp':
        await conn.sendFile(m.chat, `https://hadi-api.herokuapp.com/api/canvas/${thm}?text=${text1}`, 'sticker.webp', '', m)
            break
            
        case 'nulis':
        case 'nulis2':
    let ling = `https://hadi-api.herokuapp.com/api/canvas/${args[0]}?text=${text1}`
    await conn.sendButton(m.chat, 'Nih', wm, ling, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'chord':
            if (!text1) throw `Contoh penggunaan ${usedPrefix}${command} sayang`
        let f = await fetch(`https://hadi-api.herokuapp.com/api/chord?q=${text1}`)
        let x = await f.json()
        let captionab = `*Result:* ${x.result}`
        await conn.sendButton(m.chat, captionab, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'corohelp':
            if (!text1) throw `Contoh penggunaan ${usedPrefix}${command} indonesia`
        let fA = await fetch(`https://hadi-api.herokuapp.com/api/corohelp?negara=${text1}`)
        let oA = await fA.json()
        let xA = oA.result
        let captionA = `*terkonfirmasi:* ${xA.terkonfirmasi}
*meniggal:* ${xA.meniggal}
*sembuh:* ${xA.sembuh}
*update:* ${xA.update}
`
        await conn.sendButton(m.chat, captionA, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'cuaca':
            if (!text1) throw `Contoh penggunaan ${usedPrefix}${command} sulswesi selatan`
        let fabt = await fetch(`https://hadi-api.herokuapp.com/api/cuaca?prov=${text1}`)
        let oabt = await fabt.json()
        
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let xabt of oabt.result) {
        caption += `
${xabt.kota}
${xabt.malam}
`}
        await conn.reply(m.chat, caption, m, frep)
            break
            
        case 'cuttly':
            if (!text1) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`
        let fabu = await fetch(`https://hadi-api.herokuapp.com/api/cuttly?url=${text1}`)
        let xabu = await fabu.json()
        let captionabu = `*Result:* ${xabu.result}`
        await conn.sendButton(m.chat, captionabu, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'darkjokes':
        let fabl = await fetch(`https://hadi-api.herokuapp.com/api/darkjokes`)
        let xabl = await fabl.json()
        let captionabl = `*Result:* ${command}`
        await conn.sendButton(m.chat, captionabl, wm, xabl.result, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'detik':
        let fabk = await fetch(`https://hadi-api.herokuapp.com/api/detik`)
        let oabk = await fabk.json()
        let pabk = oabk.result
        let xabk = pabk.getRandom()
        let captionabk = `*Result:* ${xabk.title}
*Result:* ${xabk.link_url}
${xabk.Time}
`
        await conn.sendButton(m.chat, captionabk, wm, xabk.result.img_url, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'font':
            if (!text1) throw `Contoh penggunaan ${usedPrefix}${command} sayang`
        let fabb = await fetch(`https://hadi-api.herokuapp.com/api/font?teks=${text1}`)
        let xabb = await fabb.json()
        let captionabb = `*Result:* ${xabb.result}`
        await conn.sendButton(m.chat, captionabb, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'font2':
            if (!text1) throw `Contoh penggunaan ${usedPrefix}${command} sayang`
        let fabc = await fetch(`https://hadi-api.herokuapp.com/api/font2?teks=${text1}`)
        let xabc = await f.json()
        let captionabc = `*Result:* ${xabc.result}`
        await conn.sendButton(m.chat, captionabc, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'githubstalk':
            if (!text1) throw `Contoh penggunaan ${usedPrefix}${command} sayang`
        let fabg = await fetch(`https://hadi-api.herokuapp.com/api/githubstalk?username=${text1}`)
        let oabg = await f.json()
        let xabg = oabg.result
        let captionabg = `*Bio:* ${xabg.bio}
*company:* ${xabg.company}
*email:* ${xabg.email}
*t-user:* ${xabg.twiter_username}
*p-repo:* ${xabg.public_repo}
*p-gists:* ${xabg.public_gists}
*follower:* ${xabg.follower}
*following:* ${xabg.following}
*location:* ${xabg.location}
`
        await conn.sendButton(m.chat, captionabg, wm, xabg.avatar, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
            //Sakura
            
            case 'ahegao':
        case 'ass':
        case 'bdsm':
        case 'blowjob':
        case 'cuckold':
        case 'cum':
        case 'ero':
        case 'femdom':
        case 'foot':
        case 'gangbang':
        case 'glasses':
        case 'hentai':
        case 'hentaigif':
        case 'jahy':
        case 'masturbation':
        case 'neko':
        case 'orgy':
        case 'panties':
        case 'pussy':
        case 'thighs':
        case 'yuri':
                let peabz = await fetch(`https://mysakura.herokuapp.com/api/nsfw/${args[0]}?apikey=sakura404`)
        let xabz = await peabz.json()
        await conn.sendButton(m.chat, `${command}`, wm, xabz.result, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
            case 'hijaber':
        case 'harley':
        case 'cecans':
        case 'anony':
                let peabg = await fetch(`https://mysakura.herokuapp.com/api/wallpaper/${args[0]}?apikey=sakura404`)
        let xeabg = await peabg.json()
        await conn.sendButton(m.chat, `${command}`, wm, xeabg.result.url, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'waifu':
        case 'nekonime':
        case 'shinobu':
        case 'megumin':
        case 'chobay':
                let pesb = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xsb = await pesb.json()
        await conn.sendButton(m.chat, `${command}`, wm, xsb.result.url, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'bonk':
        case 'bully':
        case 'cry':
        case 'cuddle':
        case 'dance':
        case 'hug':
        case 'lick':
        case 'pat':
        case 'slap':
        case 'smile':
        case 'smug':
        case 'yeet':
                let peaa = await fetch(`https://mysakura.herokuapp.com/api/sfw/${args[0]}?apikey=sakura404`)
        let xaa = await peaa.json()
        await conn.sendButton(m.chat, `${command}`, wm, xaa.result.url, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            
        case 'bucin':
        let pebb = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xbb = await pebb.json()
        await conn.sendButton(m.chat, `*Bucin* ${xbb.result.result}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'pantun':
        let pecc = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xcc = await pecc.json()
        await conn.sendButton(m.chat, `*pantun* ${xcc.result.pantun}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'dare':
        let pedd = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xdd = await pedd.json()
        await conn.sendButton(m.chat, `*dare* ${xdd.result.dare}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'trut':
        let peee = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xee = await peee.json()
        await conn.sendButton(m.chat, `*trut* ${xee.result.trut}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'aneh':
        let peff = await fetch(`https://mysakura.herokuapp.com/api/truth/${args[0]}?apikey=sakura404`)
        let xff = await peff.json()
        await conn.sendButton(m.chat, `*truth* ${xff.result.truth}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'motivasi':
        let pegg = await fetch(`https://mysakura.herokuapp.com/api/${args[0]}?apikey=sakura404`)
        let xgg = await pegg.json()
        await conn.sendButton(m.chat, `*motivasi* ${xgg.result.motivasi}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'anime':
        let pehh = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xhh = await pehh.json()
        await conn.sendButton(m.chat, `*quote* ${xhh.quotes}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'islami':
        let peii = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xii = await peii.json()
        await conn.sendButton(m.chat, `*quote* ${xii.result}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
        case 'bijak':
        case 'joker':
        let pejj = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xjj = await pejj.json()
        await conn.sendButton(m.chat, `*quote* ${xjj.result.quotes}`, wm, null, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
            case 'gambar':
        let pekk = await fetch(`https://mysakura.herokuapp.com/api/quote/${args[0]}?apikey=sakura404`)
        let xkk = await pekk.json()
        await conn.sendButton(m.chat, `*quote* ${args[0]}`, wm, xkk.result.url, [
                ['𝗡𝗘𝗫𝗧', `${usedPrefix}${command}`]
            ], m, fdoc)
            break
            
          }
          } catch {
          throw eror
          }
     }
}
handler.help = ['mys <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^mys$/i
export default handler