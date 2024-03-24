
import { BingChat } from 'bing-chat'

let handler = async (m, { args, usedPrefix, text, command }) => {
	async function main() {
  const api = new BingChat({ 
	  cookie: "1qtBP2Ich4IjQX-IJ5OOxVJYVgDM1C4xSkl8nk8-uMUWeIkuZTOWTsAJu52xCNpX3qXUS3xViEEQO-kHR-hq08tF_YkhHtnc2OoZspSwvtve7BudAGIv_ExOcemTZstdSiCLaP8eTtkqzLG5y2yH8K6gPv3AxyLbLvRBWPHOFDfSfwf_xgWsDwCLb6d0e5LyzRGmvMIRZVpnX8v2W4r3jWw"
  })

  const prompt = text

  const res = await api.sendMessage(prompt, {
    text: prompt,
	variant: 'Precise'
  })
 await m.reply(res.text, m)
	}
}
handler.help = ['chatgpt']
handler.tags = ['ai']
handler.command = /^gpt/i
handler.limit = true
handler.premium = true
export default handler
