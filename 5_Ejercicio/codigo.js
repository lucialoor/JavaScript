/*Crea una página web como la de la figura, al seleccionar un botón 
de radio y hacer clic en el botón, se cambiará el color de fondo de la página.*/

var seleccionado;

function setColor(){
	var color; 
	if(seleccionado[0].checked) color = seleccionado[0].value;
	else if(seleccionado[1].checked) color = seleccionado[1].value;
	else color = seleccionado[2].value;
	document.body.style.backgroundColor = color;
}

window.onload = function(){
	seleccionado = document.formulario.radio; 
	document.body.style.backgroundColor = "yellow";
	document.formulario.boton.addEventListener('click', setColor);

}