const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const color = require('colors')
let comando = argv._[0];
switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        // console.log('crear');
        console.log(argv.base);
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado: ${archivo}`));
        break;
    default:
        console.log('comando no reconocido');
        break;
}
// console.log(argv);
// crearArchivo(base).then(archivo => console.log(`archivo creado: ${archivo}`));