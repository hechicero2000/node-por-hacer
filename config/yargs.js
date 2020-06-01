const opcion1 = {
	descripcion:{
		demand:true,
		alias: 'd',
		desc:'Descripcion de la tarea por hacer'
	}
}

const opcion2 = {
	descripcion:{
		demand:true,
		alias: 'd'
	},
	completado:{
		default:true,
		alias: 'c',
		desc:'Marca como completado o pendiente la tarea'
	}
}

const argv = require('yargs')
			.command('crear','Crea una tarea nueva',opcion1)
			.command('actualizar','Actualiza una tarea existente',opcion2)
			.command('borrar','Elimina una tarea',opcion1)
			.help()
			.argv;

module.exports = { argv }