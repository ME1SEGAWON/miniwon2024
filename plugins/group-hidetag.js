/*import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, participants }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
    conn.sendMessage(m.chat, { text: text,mentions: participants.map(a => a.id) }, {quoted:fkontak})
    }
handler.help = ['hidetag']
handler.tags = ['group']
handler.command = /^(hidetag)$/i

handler.group = true
handler.admin = true

export default handler*/



import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
	let users = participants.map(u => conn.decodeJid(u.id))
	let q = m.quoted ? m.quoted : m
	let c = m.quoted ? m.quoted : m.msg
	const msg = conn.cMod(m.chat,
		generateWAMessageFromContent(m.chat, {
			[c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
				text: c || ''
			}
		}, {
			quoted: m,
			userJid: conn.user.id
		}),
		text || q.text, conn.user.jid, { mentions: users }
	)
	await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i

handler.group = true
handler.admin = true

export default handler
