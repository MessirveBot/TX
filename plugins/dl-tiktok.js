
import fg from 'fg-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ Ingrese un link de Tiktok\n\n 📌 Ejemplo : ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
if (!args[0].match(/tiktok/gi)) throw `❎ verifica que el link sea de tiktok`
m.react(rwait)

try {
    let p = await fg.downloader.tiktok(text) 
				let te = `
 TIKTOK
 *Username:* ${p.author}
 *Descripción:* ${p.title}
`
    conn.sendButton(m.chat, te, igfg, p.nowm, [[' Stalkig', `${usedPrefix}ttstalk ${p.author.replace(/^@/, '')}`], ['♫ Audio', `${usedPrefix}tomp3`]], m)
    m.react(done)
    } catch {  	
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Error al descargar el video'
    conn.sendButton(m.chat, `
 TIKTOK
 *Nickname:* ${nickname} ${description ? `\n *Descripción:* ${description}` : ''}
`, igfg, url, [['♫ Audio', `${usedPrefix}tomp3`]], m)
m.react(done)
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i


export default handler
