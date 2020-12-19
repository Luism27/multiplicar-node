const fs = require('fs');
const color = require('colors')
let listarTabla = (base, limite) => {
    console.log('========================================'.red);
    console.log(`tabla de ${base}`.green);
    console.log('========================================'.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base*i} \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.blue);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla,
}