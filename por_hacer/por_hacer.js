const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile('db/data.json',data,function(err){
		if(err) throw new Error('No se pudo grabar',err);
		console.log("Guardado");
	});
}

const crear = (descripcion) => {
	cargarDB();

	let porHacer = { 
		descripcion,
		completado:false
	};
	listadoPorHacer.push(porHacer);
	guardarDB();
	return porHacer;
}

const cargarDB = () => {

	try{
		listadoPorHacer = require('../db/data.json');
		//console.log(listadoPorHacer);
	}catch(error){
		listadoPorHacer = [];
	}
}

const getListado = () => {
	cargarDB();
	return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
	cargarDB();

	let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
	if(index >= 0)
	{
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}
	else
	{
		return false;
	}
}

const eliminarTarea = (descripcion) => {
	cargarDB();

	let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

	if(index >= 0)
	{
		if(listadoPorHacer[index].descripcion === descripcion)
		{
			listadoPorHacer.pop([index]);
			guardarDB();
			return true;
		}
		else
		{
			console.log('Tarea no existe, verifique');
			return false;
		}			
	}
	else
	{
		console.log('Tarea no existe, verifique');
		return false; 
	}

}

module.exports = { crear, getListado, actualizar, eliminarTarea }