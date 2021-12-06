 /* Desarrolla un programa que use la función anterior para puntuar las manos 
 de cartas de dos jugadores e imprima por consola al ganador, es decir, 
 al que obtenga mayor puntuación.*/

 var carta1 = {
 	palo: "c", 
 	valor: 3
 };

 var carta2 = {
 	palo: "c",
 	valor: 1
 };

 var carta3 = {
 	palo: "t", 
 	valor: 12
 };

 var carta4 = {
 	palo: "p",
 	valor: 8
 };

 // Creación de arrays de cartas

 var mano = [carta1, carta2, carta3, carta4];
 console.log(puntuar(mano));
 console.log(programa());

 function puntuar(mano){
    var resultado = 0;
    var temp = 0; 
    for(var i = 0; i < mano.length; i++){
        if(mano[i].valor == 1) temp=20; 
        else temp = mano[i].valor;

        if(mano[i].palo == "c" || mano[i].palo == "p"){
            temp*=2;
        }
        resultado +=temp;
    }
    return resultado; 
 }
 function programa(){
    var jugador1 = puntuar([carta1, carta2, carta4]);
    var jugador2 = puntuar([carta1, carta2, carta3]);

    if(jugador1 > jugador2) console.log("jugador1 obtiene mayor puntuación");
    else if(jugador2 > jugador1) console.log("jugador2 obtiene mayor puntuación");
    else console.log("los dos jugadores obtienen la misma puntuación");
 }
