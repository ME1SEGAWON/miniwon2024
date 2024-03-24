import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Miniwon OTP/i.test(m.quoted.text) || /.*OTP/i.test(m.text))
        return !0
    this.emailotp = this.emailotp ? this.emailotp : {}
    if (!(id in this.emailotp))
        return m.reply(m.chat, 'OTP Expired ⚠️', m)
    if (m.quoted.id == this.emailotp[id][0].id) {
        let isSurrender = /^(batal|cancel|reset|ulang)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.emailotp[id][3])
            delete this.emailotp[id]
            return this.reply(m.chat, '*OTP dibatalkan silahkan coba lagi*', m)
        }
        let json = JSON.parse(JSON.stringify(this.emailotp[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].verif = true
            this.reply(m.chat, `✅ *OTP Benar!*`, m)
            clearTimeout(this.emailotp[id][3])
            delete this.emailotp[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(` Salah❗*Jangan Coba Coba Bruteforce Atau Kamu Akan Di Banned IP!*`)
        else
            this.reply(m.chat, `❌ *OTP Salah!*`, m)
    }
    return !0
}
export const exp = 0

const buttonemailotp = [
    ['emailotp', '/emailotp']
]