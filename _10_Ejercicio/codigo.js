var espacioOculto; 

function mostrar(){
	espacioOculto.style.display = "block";
}

function ocultar(){
	espacioOculto.style.display = "none";
}

function inicializar(){
	espacioOculto = document.getElementById("espacioOculto");
	espacioOculto.style.display ="none";
}

function setManejadorEventos(){
	document.formulario.botonMostrar.addEventListener('click', mostrar);
	document.formulario.botonOcultar.addEventListener('click', ocultar);
}

window.onload = function(){
	inicializar();
	setManejadorEventos();
}