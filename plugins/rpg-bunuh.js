let handler = async (m, { conn }) => {
  let __timers = (new Date - global.db.data.users[m.sender].lastbunuhi)
  let _timers = (300000 - __timers)
  let order = global.db.data.users[m.sender].ojekk
  let timers = clockString(_timers)
  let name = conn.getName(m.sender)
  let user = global.db.data.users[m.sender]

  if (new Date - global.db.data.users[m.sender].lastbunuhi > 300000) {
    let randomaku1 = `${Math.floor(Math.random() * 10)}`
    let randomaku2 = `${Math.floor(Math.random() * 10)}`
    let randomaku4 = `${Math.floor(Math.random() * 5)}`
    let randomaku3 = `${Math.floor(Math.random() * 10)}`
    let randomaku5 = `${Math.floor(Math.random() * 10)}`

      .trim()

    let rbrb1 = (randomaku1 * 2)
    let rbrb2 = (randomaku2 * 10)
    let rbrb3 = (randomaku3 * 1)
    let rbrb4 = (randomaku4 * 15729)
    let rbrb5 = (randomaku5 * 50822)

    var zero1 = `${rbrb1}`
    var zero2 = `${rbrb2}`
    var zero3 = `${rbrb3}`
    var zero4 = `${rbrb4}`
    var zero5 = `${rbrb5}`

    var dimas = `    
🕵️ Mendapatkan Target.....
`

    var dimas2 = ` 
⚔️ Menusuk Tubuhnya..... 
`

    var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`

    var dimas4 = `
💼 Membersihkan Tempat Pembunuhan
`

    var hsl = `
*—[ Hasil ${name} ]—*
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 
 ➕ 👮 Pelanggaran +1	 
 ➕ ☑️ Misi Berhasil = +1
➕  📥Total Misi Sebelumnya : ${order}
${wm}
`


    global.db.data.users[m.sender].money += rbrb4
    global.db.data.users[m.sender].exp += rbrb5
    global.db.data.users[m.sender].warn += 1


    function randomTimeout(min, max) {
      return Math.random() * (max - min) + min;
    }

    let delay = 0;


    setTimeout(() => {
      m.reply('🔍Mencari Target pembunuhan.....')
    }, delay);

    delay += randomTimeout(60000, 180000);
    setTimeout(() => {
      m.reply(`${dimas}`)
    }, delay);

    delay += randomTimeout(60000, 180000);
    setTimeout(() => {
      m.reply(`${dimas2}`)
    }, delay);

    delay += randomTimeout(60000, 180000);
    setTimeout(() => {
      m.reply(`${dimas3}`)
    }, delay);

    delay += randomTimeout(60000, 180000);
    setTimeout(() => {
      m.reply(`${dimas4}`)
    }, delay);

    delay += randomTimeout(60000, 180000);
    setTimeout(() => {
      m.reply(`${hsl}`)
    }, delay);

    user.lastbunuhi = new Date * 1
  } else conn.sendMessage(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, wm, m)
}
handler.help = ['bunuh']
handler.tags = ['rpg']
handler.command = /^(bunuh)$/i
handler.register = true
handler.limit = true
handler.premium = true

export default handler


function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ ms, h, m, s })
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}