
import { igStalk } from '../lib/scraper.js'

let handler= async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `â³ï¸ Escriba un Nombre de Usuario\n\nðEjemplo : ${usedPrefix + command} sebaastian_88`
    
    let res = await igStalk(text)
    if (!res) throw res
    let caption = `
 *STALKING* 
 *ð Nombre* : ${res.name} 
 *ð Username* : ${res.username}
 *ð¥ Seguidores* : ${res.followersH}
 *ð« Siguiendo* : ${res.followingH}
 *ð Bio :* ${res.description}
 *ðï¸ Posts:* ${res.postsH}

 *ð Link* : https://instagram.com/${res.username.replace(/^@/, '')}

`
 if (res.profilePic) return conn.sendMessage(m.chat, { image: { url: res.profilePic }, caption }, { quoted: m })
 m.reply(caption)
}

handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
