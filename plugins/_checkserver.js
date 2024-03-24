import axios from 'axios'

let handler = async (m, { conn, text }) => {

const response = await axios.get({
    headers: {
       referer: 'https://clovyr.app/view/' + process.env.CLOVYR_APPNAME,
       cookie: process.env.CLOVYR_COOKIE
    }
})
let res = response.status
	m.reply(res)
/*.then(response => {
    console.log(response.status)
	let res = response.status
	m.reply(res)
})
.catch(error => {
    console.log(error)
});*/
	
	
}
handler.help = ['info']
handler.tags = ['server']
handler.command = /^(inf)$/i
handler.limit = true

export default handler