const argv = require('./config/yargs').argv;
const  porHacer  = require('./por_hacer/por_hacer');
const colors = require('colors');

let comando = argv._[0];

switch(comando)
{
	case 'crear':
		console.log('CREAR UNA LISTA');
		let tarea = porHacer.crear(argv.descripcion);
	break;
	case 'listar':
		console.log('LISTADO DE TAREAS POR HACER');
		let listado = porHacer.getListado();

		for(let tarea of listado)
		{
			console.log('===============Por Hacer==============='.brightGreen);
			console.log(tarea.descripcion);
			console.log('Estado: ', tarea.completado);
			console.log('======================================='.brightGreen);
		}
	break;
	case 'actualizar':
		console.log('ACTUALIZAR UNA TAREA POR HACER');
		let act = porHacer.actualizar(argv.descripcion);
	break;
	case 'borrar':
		console.log('BORRAR TAREA');
		let borrar = porHacer.eliminarTarea(argv.descripcion);
		console.log(borrar);
	break;
	default:
		console.log('Comando no reconocido');
	break;
}

