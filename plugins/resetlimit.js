let handler = async (m, { conn, args, text }) => {
	function reset(){
	let list = Object.entries(global.db.data.users)
        if(!args || !args[0]) {
            var lim = 500
        } else {
            var lim = parseInt(args[0])
        }
        list.slice(0, list.length).map(([user, data], i) => (Number(data.limitbuy = lim)))
        //conn.reply(m.chat, `*berhasil direset ${lim} / i*`, m)
}
 
	setInterval(reset, 10 * 60 * 1000);
 
}

handler.help = ['']
handler.tags = ['']
handler.command = /^(resl)$/i
handler.rowner = true
handler.exp = 0
handler.fail = null

export default handler