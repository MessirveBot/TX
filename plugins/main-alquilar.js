
let handler = async(m, { conn, usedPrefix, command }) => {

    let donat = `
    *DESEAS ALQUILAR EL BOT?*
        
 

    *BENEFICIOS*
1- EL BOT SERA MAS RAPIDO
2- AL COMPRAR EL BOT TODOS LOS COMANDOS ESTAN DISPONIBLES
3- TIENE DERECHO A UNIR EL BOT A 2 GRUPOS!
4- EL BOT NUNCA TENDRA CAIDAS NI CUANDO ESTE EN MANTENIMIENTO.
5- SE AGREGARAN MAS OPCIONES QUE EN LA VERSION FREE


    *COSTO*

*1 MES: 3 DLS*
*2 MESES: 5 DLS*
 
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, donat,'Haga click en boton si quiere CONTACTAR a mi creador para realizar la compra', img, [['CONTACTAR', `${usedPrefix}owner`]],m)
}

handler.help = ['alquilar']
handler.tags = ['main']
handler.command = ['buypremium', 'buyprem', 'alquilar', 'comprar'] 

export default handler
