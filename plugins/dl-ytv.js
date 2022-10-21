
import fetch from 'node-fetch'
import fg from 'fg-dylux' 
import { ytv } from '../lib/y2mate.js'
let limit = 300
let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
   if (!args || !args[0]) throw `✳️ Ejemplo :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `❎ Verifica que el link de YouTube`
 let chat = global.db.data.chats[m.chat]
 m.react(rwait) 
 
 //try {
  let { title, size, link, thumb, tipe, quality } = await ytv(text)
  if(Number(size.split(' MB')[0]) >= limit) {
     axios.get(`https://tinyurl.com/api-create.php?url=${link}`).then((G) => {
     return m.reply(`
 *📌Título* : ${title}
 *⚖️Peso* : ${size}

 _El archivo supera el límite de descarga_ *+${limit} MB*
 Descarga  Aquí ${G.data}` )  }) 
      } else {  
 conn.sendFile(m.chat, link, title + '.mp4', `
   *TX MUSIC*
  
 *📌Título* : ${title}
 *📟Tipo* : ${tipe}
 *⚖️Peso* : ${size}
 *🎞️Calidad* : ${quality}
`.trim(), m, false, { asDocument: chat.useDocument })
m.react(done)
} 
//-
 /*} catch {  	
	fg.downloader.youtube.ytmp4(text).then((res) => {
     conn.sendFile(m.chat, res.result, res.title + '.mp4', `
   *TX MUSIC 2*
  
 *📌Título* : ${res.title}
 *📟 Ext* : mp4
 *🎞️Calidad* : ${res.quality}
 *⚖️Peso* : ${res.size}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
})    }*/


}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'txmp4']


export default handler
