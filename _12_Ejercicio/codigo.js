/* Programar utilizando JavaScript el documento HTML para que realice 
las siguientes operaciones cuando se pulse el botón “Generar Carta a los Reyes Magos”:
a) Verifique que los campos obligatorios han sido rellenados y que no se excede del tamaño máximo: 
todos los campos son obligatorios, los campos con los regalos no deben superar los 30 caracteres.
b) En el caso en que no estén rellenos aparecerá el texto “campo obligatorio” al lado del campo correspondiente.
c) En el caso en que el teléfono no cumpla el patrón “(+prefijo) número de teléfono”, 
aparecerá un texto explicativo al lado del campo:
d) Rellenar la siguiente ficha con los datos del formulario:
e) En función del Rey Mago favorito, modificar el color de la carta 
(Melchor – color rojo; Gaspar – color amarillo y Baltasar – color verde).
f) Hacer que la ficha esté oculta inicialmente y se muestre cuando el formulario 
haya sido rellenado satisfactoriamente:*/

var nombre; 
var fecha; 
var direccion; 
var telefono; 
var presupuesto; 
var rey=document; 
var regalo1; 
var regalo2; 
var regalo3; 
var errorNombre; 
var errorApellido; 
var errorTelefono; 
var errorDireccion; 
var errorFecha; 
var errorRegalos;

function resetear(){
	errorNombre.textContent="";
	errorFecha.textContent="";
	errorDireccion.textContent="";
	errorTelefono.textContent="";
	errorRegalos.textContent="";
}

function rellenarCarta(){
	
	fichaNombre.textContent="Nombre " + nombre; 
	fichaPrecio.textContent="Precio medio por regalo: " + parseInt((presupuesto)/3) + "€";
	fichaRey.textContent="Rey Mago favorito: " + rey;
	fichaRegalo1.textContent="Regalo 1: " + regalo1;
	fichaRegalo2.textContent="Regalo 2: " + regalo2;
	fichaRegalo3.textContent="Regalo 3: " + regalo3;
	switch(rey){
		case "melchor": 
		ficha.style.backgroundColor="red";
		break;
		case "gaspar": 
		ficha.style.backgroundColor="yellow";
		break;
		case "baltasar":
		ficha.style.backgroundColor="green";
		break;
	}

	ficha.style.display="block";
}

function inicializarVariables(){
	nombre=document.formulario.nombre.value; 
	fecha=document.formulario.fechaNac.value; 
	direccion=document.formulario.direccion.value; 
	telefono=document.formulario.telefono.value; 
	presupuesto=document.formulario.presupuesto.value; 
	rey=document.formulario.reyMago.value; 
	regalo1=document.formulario.regalo1.value; 
	regalo2=document.formulario.regalo2.value; 
	regalo3=document.formulario.regalo3.value; 
	boton=document.formulario.boton;
	errorNombre = document.getElementById("errorNombre");
	errorApellido = document.getElementById("errorApellido");
	errorTelefono = document.getElementById("errorTel");
	errorFecha = document.getElementById("errorFecha");
	errorDireccion = document.getElementById("errorDir");
	errorRegalos = document.getElementById("errorRegalos");
}

function generarCarta(){
	inicializarVariables();
	resetear();

	var error= 0; 

	if(nombre.length== 0){
		errorNombre.textContent="Campo obligatorio"; 
		error++;
	}

	if(fecha.length== 0){
		errorFecha.textContent="Campo obligatorio";
		error++;
	}

	if(direccion.length== 0){
		errorDir.textContent="Campo obligatorio";
		error++;
	}

	if(telefono.length== 0){
		errorTel.textContent="Campo obligatorio";
		error++;
		}else{
			var patronTelefono= /^\(\+\d{2,3}\)\d{9}$/;
			if(patronTelefono.test(telefono)==false){
				errorTel.textContent+= "Formato: (+34)123456789";
				error++; 
			}
	}
	if(regalo1.length==0 || regalo2.length==0 || regalo3.length==0){
		errorRegalos.textContent="Campos obligatorios"; 
		error++;
	}

	if(error==0) rellenarCarta(); 
	
}

window.onload=function(){
	
	ficha.style.display='none';
	document.formulario.boton.addEventListener("click", generarCarta);
}