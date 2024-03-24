import fetch from 'node-fetch'
import nodemailer from 'nodemailer'
let timeout = 120000
let poin = 0
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text.endsWith('@gmail.com')) return m.reply('*Sistem Mendeteksi Gmail Yang Anda Gunakan Palsu! Jangan Pakai Temp Mail!*\n\nHanya Gmail Dari Google Yang Bisa Untuk Daftar\n\ncontoh@gmail.com')

  let user = global.db.data.users[m.sender]
  user.gmail = text
  conn.emailotp = conn.emailotp ? conn.emailotp : {}
  let id = m.chat
  if (id in conn.emailotp) {
    conn.reply(m.chat, 'OTP Anda Yang Sebelumnya Belum Expired, Silahkan Batalkan OTP Untuk Meminta OTP baru', conn.emailotp[id][0])
    throw false
  }
  if (!text) return m.reply(
    `Mana Emailnya? Contoh: ${usedPrefix + command} email\nContoh: .regmail miniwon@gmail.com`
  )
  let generateOTP = (Math.floor(Math.random() * 9000) + 1000).toString()
  let avatar = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
  let res = await sendEmail(author, generateOTP, conn.user.jid.split("@")[0], avatar, text)

  let json = {
    jawaban: generateOTP,
    soal: `Reply Pesan Ini Dengan Otp Yang Kami Kirim Ke\n${text}`
  }
  if (user.verif == false) {
    let caption = `*${command.toUpperCase()}*
  ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Miniwon OTP
Ketik Batal Untuk Membatalkan Otp
    `.trim()
    conn.emailotp[id] = [
      await conn.reply(m.chat, caption, '', m),
      json, poin,
      setTimeout(() => {
        if (conn.emailotp[id]) conn.reply(m.chat, `Waktu habis!\nOTP adalah *${json.jawaban}*`, conn.emailotp[id][0])
        delete conn.emailotp[id]
      }, timeout)
    ]
  } else {
    m.reply(`Kamu Sudah Login Sebagai:\n${user.gmail}`)
  }
}
handler.help = ['emailotp']
handler.tags = ['game']
handler.command = /^regmail/i
handler.private = true
export default handler

const buttons = [
  ['Hint', '/hotp'],
  ['Nyerah', 'menyerah']
]

async function sendEmail(Name, OTP, Number, PP, Mail) {
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "iyasrisal2@gmail.com",
      pass: "xsmtpsib-b510a079e382c374e90a67d560dae5ca8e4d8656c2cb92861d1b7f15dce2b40e-FDr85G0cw9jk6I7q",// replace with your password
    }
  });


  await transporter.sendMail({
    from: "support@miniwon.online", // sender address
    to: Mail, // replace with the user's email
    subject: "Your Miniwon OTP 🥳🥳",
    text: `Welcome To Miniwon Family\n\n\n\n\nYour OTP for MINIWON BOT verification is → ⟬${OTP}⟭\n\n\n\nWelcome to MiniWon Bot! We are very grateful and honored to have you here. Your presence adds vibrancy and color to our community. We hope you enjoy every moment you spend with us. Best wishes from all of us at MiniWon Bot! 🎉🥳\n\n\ᴵᶠ ʸᵒᵘ ᵉˣᵖᵉʳᶦᵉⁿᶜᵉ ᵃⁿʸ ᵖʳᵒᵇˡᵉᵐˢ ᵖˡᵉᵃˢᵉ ᶜᵒⁿᵗᵃᶜᵗ ᵘˢ ᵃᵗ : ʰᵗᵗᵖˢ://ʷᵃ.ᵐᵉ/⁶²⁸⁵⁶⁴¹⁴⁶³²⁹⁴`,
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Your Miniwon OTP Code</title>
</head>
<body style="background-color: #f2f2f2; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;">
  <div class='container' style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); padding: 20px; width: 300px; text-align: center;">
    <div class='profile-pic' style="width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 10px; background-color: #e5e5e5; background-image: url('${PP}'); background-size: cover; background-position: center;"></div>
    <div class='name' style="font-size: 18px; font-weight: bold; margin-bottom: 5px;">${Name}</div>
    <pre>
	
	
	
	</pre>
	<div class='description' style="font-size: 14px; color: #888888; margin-bottom: 10px;">KODE OTP ANDA</div>
    <div class='otp-code' style="font-size: 24px; font-weight: bold; margin-bottom: 20px;"><strong>${OTP}</strong></div>
	<pre>
Welcome To Miniwon Family 
	
HI ${Name} 
Your Verification Code Is → ${OTP}
	
	
Welcome to MiniWon Bot! We are very grateful and honored to have you here. Your presence adds vibrancy and color to our community.
We hope you enjoy every moment you spend with us. Best wishes from all of us at MiniWon Bot! 🎉🥳
You Deserve The Best!

	
ᴵᶠ ʸᵒᵘ ᵉˣᵖᵉʳᶦᵉⁿᶜᵉ ᵃⁿʸ ᵖʳᵒᵇˡᵉᵐˢ ᵖˡᵉᵃˢᵉ ᶜᵒⁿᵗᵃᶜᵗ ᵘˢ ᵃᵗ : ʰᵗᵗᵖˢ://ʷᵃ.ᵐᵉ/⁶²⁸⁵⁶⁴¹⁴⁶³²⁹⁴

© 2020 - 2023 MINIWON BOT LLC




	</pre>
	<a href='https://wa.me/6285641463294?text=HI' style="text-decoration: none;">
      <button class='send-button' style="background-color: #ff0000; color: #ffffff; border: none; border-radius: 5px; padding: 10px 20px; font-size: 16px; cursor: pointer;">Tekan Jika Butuh Bantuan</button>
    </a>
	
  </div>
</body>
</html>
`
  })

}