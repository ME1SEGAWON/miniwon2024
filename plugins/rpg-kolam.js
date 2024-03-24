let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
  let name = global.db.data.users[m.sender].name
  let level = global.db.data.users[m.sender].level
  let exp = global.db.data.users[m.sender].exp
  let paus = global.db.data.users[m.sender].paus
  let kepiting = global.db.data.users[m.sender].kepiting
  let gurita = global.db.data.users[m.sender].gurita
  let cumi = global.db.data.users[m.sender].cumi
  let buntal = global.db.data.users[m.sender].buntal
  let dory = global.db.data.users[m.sender].dory
  let lumba = global.db.data.users[m.sender].lumba
  let lobster = global.db.data.users[m.sender].lobster
  let hiu = global.db.data.users[m.sender].hiu
  let udang = global.db.data.users[m.sender].udang
  let ikan = global.db.data.users[m.sender].ikan
  let orca = global.db.data.users[m.sender].orca
  let past = `*––––––「 KOLAM 🏝️ 」––––––*

╭━━━━「 *BIO* 」   
┊*💌 Name :* ${name}
┊*📊 Level :* ${level}
┊*✨ Exp :* ${exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🐳 Paus: *${paus}*   
┊🦀 Kepiting: *${kepiting}*   
┊🐙 Gurita: *${gurita}*   
┊🦑 Cumi: *${cumi}*   
┊🐡 Buntal: *${buntal}*  
┊🐠 Dory: *${dory}*
┊🐬 Lumba: *${lumba}*
┊🦞 Lobster: *${lobster}*
┊🦈 Hiu: *${hiu}*
┊🦐 Udang: *${udang}*
┊🐟 Ikan: *${ikan}*
┊🐋 Orca: *${orca}*
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}* Jenis`
  let isi = ` *🦀Kepiting = ${kepiting}*
*🐠Dory = ${dory}*
*🦞Lobster = ${lobster}*
*🐟Ikan = ${ikan}*
*🦐Udang = ${udang}*
*🐬Lumba² = ${lumba}*
*🦑Cumi² = ${cumi}*
*🐋Paus = ${paus}*
*🐙Gurita = ${gurita}*
*🦈Hiu = ${hiu}*
*🐡Buntal = ${buntal}*
*🐳Orca = ${orca}*`.trim()
  conn.sendMessage(m.chat, { image: { url: pp}, caption: past}, m)
  }
handler.help = ['kotakikan', 'kolam', 'kolamikan']
handler.tags = ['rpg']
handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i
export default handler
handler.register = true
let wm = global.wm

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)