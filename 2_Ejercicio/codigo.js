 /*Partiendo de la función anterior, modifícala para que además las cartas rojas sumen el doble.*/

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