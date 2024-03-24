
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = ('6285281488302') + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  
  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}ban number|days\n*Example:* ${usedPrefix}ban 6289654360447|99\n\n• ${usedPrefix}ban @tag|days\n*Example:* ${usedPrefix}ban @6289654360447|99`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text
  var now = new Date() * 1
  global.db.data.users[hl[0]].banned = true
  if (now < global.db.data.users[hl[0]].bannedDate) global.db.data.users[hl[0]].bannedDate += jumlahHari
  else global.db.data.users[hl[0]].bannedDate = now + jumlahHari
  conn.reply(m.chat,`*TERBANNED*\n\nKamu di banned *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Banned : ${msToDate(global.db.data.users[hl[0]].bannedDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  conn.reply(`*TERBANNED*\n\nKamu di banned *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Banned : ${msToDate(global.db.data.users[hl[0]].bannedDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } }) 

}
handler.help = ['ban *@tag|days*']
handler.tags = ['owner']
handler.command = /^rpgban$/i
handler.mods = true
handler.fail = null
export default handler

function msToDate(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}