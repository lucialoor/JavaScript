// Creación de objetos 

class Empresa{
	constructor(nombre, direccion){
		this.nombre = nombre; 
		this.direccion = direccion; 
	}

	//Método
	mostrarEmpresa(){
		var texto = "";
		texto += "La empresa " + this.nombre + "\n";
		texto += "que está en " + this.direccion+".";
		return texto; 
	}
}

class Empleado{
	constructor(nombre, puesto, edad, empresa){
		this.nombre = nombre; 
		this.puesto = puesto; 
		this.edad = edad;
		this.empresa = empresa; 
	}

	mostrarEmpleado(){
		var texto = "";
		texto += "El empleado " + this.nombre+ " ";
		texto += "trabaja como " + this.puesto+".\n";
		texto += "Tiene " + this.edad + " años y trabaja en ";
		texto += this.empresa.mostrarEmpresa();
		return texto;
	}
}

var empresa1 = new Empresa ("Martinez y Asociados", "Calle Rio Rosas, nº 3");
var empresa2 = new Empresa("Carnes de Ávila", "Calle de la Muralla, nº 62");

var empleado1 = new Empleado("Carlos Martinez", "Consultor", "27", empresa1);
var empleado2 = new Empleado("Alfonso Muñoz", "Jefe de sección", "61", empresa2);

function informar(){
	switch(this.id){
		case "empresa1": alert(empresa1.mostrarEmpresa()); 
		break; 
		case "empresa2": alert(empresa2.mostrarEmpresa());
		break;
		case "empleado1": alert(empleado1.mostrarEmpleado());
		break;
		case "empleado2": alert(empleado2.mostrarEmpleado());
		break; 
	}
}

window.onload = function(){
	document.getElementById("empresa1").addEventListener('click', informar);
	document.getElementById("empresa2").addEventListener('click', informar);
	document.getElementById("empleado1").addEventListener('click', informar);
	document.getElementById("empleado2").addEventListener('click', informar);
}