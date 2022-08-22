//Receta para consumir

//1. Pa donde vas ome 
//URI DE APÍ
const URI= 'https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US'

//2. A hacer que ome?
//Metodo
const PETICION = {
    method:'GET',
    headers: {
        Authorization: 'Bearer BQC0fJd7DPD2VS0Yg2QhynZPMYcUoQAxuyPti8gOwWXTEYm6uiBEUH-xMh2VAGKQs0hE0sRN2BiELJEDdWPp7s8DQMFiHF4XT2dYthLI6IEQGXldXkngXCUkV4RYuwpdp70fyepssETakhc_7M139t09cDiW29ft25FZCpOov0TcJ3sLIPuy7NYjcJH0dLI"'
    }
}

//Andate pues ome 
//Consuma el Api (Utilizando promesas )
fetch(URI, PETICION)
.then(function(respuesta){
    return respuesta.json(9)
})

.then(function(respuesta){
    console.log(respuesta)
})

.catch(function(respuestaError){
    console.log(respuestaError)
})