/*Desarrolla una función que puntúe una mano de cartas, 
que tenga como parámetro un array de cartas, cada una representada 
por un objeto con palo y valor. Al puntuar, las cartas suman su valor
 excepto si es un as que suma 20. Prueba a invocarla con varias manos 
 de cartas con y sin ases.*/

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

 // Creación de la función que puntuará
 function puntuar(mano){
 	var resultado = 0; 
 	for(var i= 0; i < mano.length; i++){
 		if(mano[i].valor == 1) resultado += 20;
 		else resultado += mano[i].valor;
 	}
 	return resultado; 
 }