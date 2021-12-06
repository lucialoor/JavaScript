/*Desarrolla una página web con un formulario para iniciar sesión, 
comprobando que las contraseñas introducidas sean iguales. En caso contrario
se avisará al usuario por medio de mensajes de alerta, tanto si son distintas 
como si no se ha introducido ningún dato:*/

var contrasena; 
var confContrasena; 

function validar(){
	if(contrasena.value!=="" && confContrasena!== ""){
		if(contrasena.value != confContrasena.value){
			alert("Las contraseñas introducidas son distintas");
			contrasena.value="";
			contrasena.focus();
			confContrasena.value="";
		}else{
			document.form1.submit();
		}
	}else{
		alert("Contraseñas vacías");
		contrasena.focus();
	}
}

window.onload = function(){
	contrasena = document.form1.contrasena; 
	confContrasena = document.form1.confContrasena; 

	document.form1.botonEnviar.addEventListener('click', validar);
}