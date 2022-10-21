
import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${usedPrefix + command}* Lil Peep hate my life `
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw '✳️ Vídeo/Audio no encontrado'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  
m.react('🎧')
 await conn.sendButton(m.chat, `
   *TX MUSIC*

 📌 *Título* : ${title}
 📆 *Publicado:* ${publishedTime}
 ⌚ *Duración:* ${durationH}
 👀 *Vistas:* ${viewH}

  `.trim(), igfg, thumbnail, [
    ['🎶 MP3', `${usedPrefix}txmp3 ${url} yes`],
    ['🎥 MP4', `${usedPrefix}txmp4 ${url} yes`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid'] 

export default handler

