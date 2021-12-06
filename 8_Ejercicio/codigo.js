var cajaNombre; 
var edad;

function evaluar(){
	if(cajaNombre.value.length > 0){
		if(edad.value.length>0){
			if(!isNaN(edad.value)){
				if(parseInt(edad.value)>0 && parseInt(edad.value)<100){
					alert("Te llamas: " +cajaNombre.value+" y tienes "+ edad.value + " años");
					cajaNombre.value="";
					edad.value="";
					cajaNombre.focus();
				}else{
					alert("La edad está fuera de rango");
					edad.value = "";
					edad.focus();
				}
			}else{
				alert("La edad tiene que se un número");
				edad.value="";
				edad.focus();
			}
		}else{
			alert("La edad no puede estar vacía");
			edad.focus();
		}
	}else{
		alert("El nombre no puede estar vacío");
		cajaNombre.focus();
	}
}

function resetear(){
	document.formulario.nombre.focus();
}

function inicializar(){
	cajaNombre = document.formulario.nombre; 
	cajaNombre.focus(); 
	edad = document.formulario.edad; 

}

function configurarEventos(){
	document.formulario.botonEnviar.addEventListener('click', evaluar);
	document.formulario.botonReset.addEventListener('click', resetear);
}

window.onload = function(){
	inicializar();
	configurarEventos();
}