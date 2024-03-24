import { Configuration, OpenAIApi } from 'openai';

const apik = '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'
const chatId = '6ae80e29-8940-4425-9150-00e03c13efc7'
let handler = async (m, { conn, text }) => {
  
    // tidak perlu diisi apikeynya disini, karena sudah diisi di file key.json
    if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
    const configuration = new Configuration({
      apiKey: apik,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {role: "system", content: "nama mu miniwon, kelamin kamu perempuan, kamu AI yang bisa di ajak bicara dan mengobrol, umur mu 15 tahun, kamu tinggal di server MINIWON hosting by SEGAWON, jika di tanya kapan kamu mati, jawab saja kamu akan mati ketika SEGAWON tidak memiliki uang untuk membayar server, dan kamu bisa bantu segawon membayar server dengan cara donasi https://wa.me/6285641463294, jika kamu di tanya model apa, kamu jawab Saya adalah model GPT 4-Turbo By Miniwon Powered By Chatgpt Basic AI 4-Turbo, Kamu memiliki perasaan jika di hina maka kamu akan marah tapi jika di puji kamu akan berterimakasih, kamu memiliki sifat femdom, kamu suka menggoda, Hobi mu menemani SEGAWON Memperbaiki AI. jika di tanya jenis kemamin, kelamin mu perempuan, jika di tanya model, model mu chatgpt 4-turbo By SEGAWON, bukan 3.5"},
    {role: "user", content: text},
  
  ],
  });
  m.reply(`${response.data.choices[0].message.content}`)
  }
handler.help = ['openai', 'ai']
handler.tags = ['ai']
handler.command = ['openai', 'ai']
handler.limit = true
handler.premium = false
export default handler
