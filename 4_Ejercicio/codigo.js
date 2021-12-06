/*Pide al usuario que introduzca el nombre de un color 
y cambia el color de fondo de la página web con ese color.*/

var color = prompt("Introduce un color de fonde (rojo, azul o verde)");

function setColor(){

/*if(color == "rojo") document.body.style.backgroundColor = "red";
else if (color == "azul") document.body.style.backgroundColor = "blue"; 
else if(color == "verde") document.body.style.backgroundColor = "green";
else alert("color incorrecto");*/
	switch (color.toLowerCase()){
		case "rojo":
		document.body.style.background = "red";
		break; 
		case "azul":
		document.body.style.backgroundColor = "blue"; 
		break; 
		case "verde":
		document.body.style.backgroundColor = "green";
		break; 
		default: 
			alert("color incorrecto");
	}
}
window.onload = function(){
	
	document.body.style.backgroundColor = "yellow";
	setColor();

}