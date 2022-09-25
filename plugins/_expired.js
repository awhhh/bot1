export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let caption = `Bye? *${this.user.name}* Akan Left Dari Grup`
    await this.sendButton(m.chat, caption, wm, null, [['𝐃𝐄𝐋𝐄𝐓𝐄 𝐄𝐗𝐏𝐈𝐑𝐄𝐃', '/delexpired'], ['𝐂𝐇𝐄𝐂𝐊 𝐄𝐗𝐏𝐈𝐑𝐄𝐃', '/cekexpired']], null)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}