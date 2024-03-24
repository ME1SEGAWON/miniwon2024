const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
import fetch from 'node-fetch'
let handler = async (m, { jid, conn, usedPrefix, command, isOwner }) => {

    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let caption = `AUTO BANNED MANAGER
╭─「 Chat Terbanned 」
│✇ Total : ${chats.length} Chat${chats ? '\n' + chats.map(([jid], i) => `
│• ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : db.data.chats[jid].name}
│• ${isOwner ? '@' + jid.split`-`[0] : jid}
`.trim()).join('\n') : ''}
╰────

╭─「 Pengguna Terbanned 」
│✇ Total : ${users.length} Pengguna${users ? '\n' + users.map(([jid], i) => `
│• ${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : db.data.users[jid].name}
│• ${isOwner ? '@' + jid.split`@`[0] : jid}
`.trim()).join('\n') : ''}
╰────
`.trim()
   m.reply(caption)
}
handler.help = ['bannedlist']
handler.tags = ['info']
handler.command = /^list?ban(ned)?|ban(ned)?list?|daftarban(ned)?$/i

handler.owner = false
export default handler