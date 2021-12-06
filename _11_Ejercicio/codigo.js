/* En función de la opción del combo aparecerán unos datos u otros. 
Al enviar los datos deberá comprobar que todos los datos del formulario
están rellenos y que los datos numéricos no contienen caracteres, y si 
todo es correcto aparecerá un mensaje modal que indique "Datos enviados correctamente".*/

var pago; 
var nombre; 
var apellidos; 
var telefono; 
var numTarjeta; 
var cvv; 
var importe; 
var titular; 

function cargarPago(){
	if(pago.value == "seleccione"){
		capaTarjeta.style.display="none";
		capaEfectivo.style.display="none";
	}else if(pago.value == "tarjeta"){
		capaTarjeta.style.display = "block";
		capaEjectivo.style.display="none";
	}else{
		capaTarjeta.style.display="none";
		capaEfectivo.style.display="block";
	}
}

function enviar(){
	var num= /^\d{9}$/;
	var codigoCvv= /^\d{3}$/;

	if(nombre.value!="" && apellidos!= "" && telefono.value !=""){
		if(num.test(telefono.value)){
			if(pago.value=="tarjeta"){
				if(titular.value!= "" && numTarjeta.value!="" && cvv.value !=""){
					if(!isNaN(numTarjeta.value) && codigoCvv.test(cvv.value)){
						alert("Enviando datos...");
					}else{
						alert("Datos de tarjeta incorrectos");
					}
				}else{
					alert("Faltan datos.");
				}
			}else if(pago.value=="efectivo"){
				if(importe.value!="" && !isNaN(importe.value)){
					alert("Enviando datos...");
				}else{
					alert("Datos de importe en efectivo incorrectos");
				}
			}else alert("Seleccione un método de pago");
		
	}else{
		alert("El teléfono debe contener 9 dígitos numéricos");
	}
	}else{
		alert("Faltan datos.");
	}
}

function inicializar(){
	pago = document.formulario.pago; 
	nombre = document.formulario.nombre; 
	apellidos = document.formulario.apellidos; 
	telefono = document.formulario.telefono; 
	titular = document.formulario.titular; 
	numTarjeta = document.formulario.numTarjeta; 
	cvv = document.formulario.cvv;
	importe = document.formulario.importe; 

	capaTarjeta.style.display = "none";
	capaEfectivo.style.display = "none";
}

function setManejadorEventos(){
	pago.addEventListener("change", cargarPago);
	document.formulario.botonEnviar.addEventListener('click', enviar);
}

window.onload = function(){
	inicializar();
	setManejadorEventos();
}