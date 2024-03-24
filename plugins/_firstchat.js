import moment from 'moment-timezone'
let handler = m => m

handler.before = async function(m) {

  if (m.chat.endsWith('broadcast')) return
  if (m.fromMe) return
  if (m.isGroup) return
  // if (db.data.settings.groupOnly) return
  let user = global.db.data.users[m.sender]
  let { banned } = db.data.users[m.chat]
  let username = conn.getName(m.sender)
  if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
  //   await conn.modifyChat(m.chat, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  let uc = `
Hai ${ucapan()} *${username.replace(/@.+/, '')}* 👋

*Sebelum Mengakses Bot Harap Baca ToS*
  
*2023 © WhatsApp LLC*

*Dengan Memakai Miniwon Bot Saya Setuju Apa Bila*
1. Bot Dapat Menyimpan Data Kamu
2. Bot Dapat Mengirimi Kamu Pesan 
3. Menerima Peraturan Bot [.rules]
4. Pemilik Dapat Melihat Aktivitas Kamu Di Bot
5. Mengirimi Pesan Promosi
6. Pengguna Berusia 18 Tahun Atau Lebih
7. Chat Kamu Akan Di Kumpulkan Untuk Mengembangkan Bot
8. Tidak Akan Melakukan Spam Terhadap Bot

*2023 © WhatsApp LLC*
*By Using Miniwon Bot I Agree to What If*
1. The bot can store your data
2. The Bot Can Send You Messages 
3. Accept Bot Rules [.rules]
4. Owner can see your activity in the bot
5. Send Promotional Messages
6. Users 18 Years of Age or Older
7. Your chats will be collected to develop the bot
8. Will not spam the bot
`.trim()
  await m.reply(uc)
  user.pc = new Date * 1
}

export default handler
function ucapan() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH')
  var ucapanWaktu = 'Pagi kak'
  if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Pagi kak'
  } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Siang kak'
  } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Sore kak'
  } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Selamat Petang kak'
  } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Malam kak'
  } else {
    ucapanWaktu = 'Selamat Malam!'
  }
  return ucapanWaktu
}
