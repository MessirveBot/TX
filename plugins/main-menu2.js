
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `

_Use estos comandos sin el prefijo_



 *AUDIOS* 
 Bot
 Buenos días
 Buenas tardes 
 Buenas noches
 diagnosticado con gay
 elmo
 fiesta del admin
 vete a la verga
 triste
 audio divertido
 tu vieja
 fan de bts
 a quien chucha
 homero
 cr7
 me dio cancer 
 no bueno si
 se estan riendo de mi
 ya notaste mi presencia
 aguas con lo que dices pendejo
 ustedes saben donde 
 ando hot
 profe
 pero que mierda
 mi niña
 chupamela
 callate
 me voy a dormir
 tu quimica
 callate y mamamela
 es fanatica
 joder esa sonrisa
 esas tetas
 no me hables
 a mi que me importa
 poco de mensajes

`
//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './src/fg_logo.jpg' 
    conn.sendButton(m.chat, m2, 'By TX BOT\n▢ Sígueme en Instagram\nhttps://www.instagram.com/sebaastian_88\n', pp, [
      [' Info', `${usedPrefix}botinfo`],
      [' Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
