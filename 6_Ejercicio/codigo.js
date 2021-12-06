/*Crea una página web con una imagen que aumente de tamaño cuando el ratón pase por encima y, 
recupere su tamaño original cuando el ratón salga fuera de la imagen.*/

var imagen; 

function aumentarTam(){
	imagen.style.width = "25%";
}

function disminuirTam(){
	imagen.style.width = "20%";
}

function inicializar(){
	imagen = document.imagen; 
	imagen.style.width = "300px";
}

function configurarEventos(){
	imagen.addEventListener('mouseover', aumentarTam);
	imagen.addEventListener('mouseout', disminuirTam);
}

window.onload = function(){
	inicializar();
	configurarEventos();
}