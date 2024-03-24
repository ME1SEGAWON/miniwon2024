import { createHash } from 'crypto'
let handler = async function (m, text) {
  if (!text) throw 'Masukan Kode OTP, Ketik .regmail Jika Belum Meminta'
  let user = global.db.data.users[m.sender]
  if (text !== user.otp) { throw m.reply(`${user.otp} Ni`) }
  user.verif = true
  m.reply('```Selamat Anda Sukses Verifikasi Gmail!```')
}
handler.help = ['otp']
handler.tags = ['main']

handler.command = /^otp?$/i
handler.register = true

export default handler