import fs from 'fs';

import chalk from 'chalk';
import { error } from 'console';

// console.log(chalk.blue('Olá mundo'));

// console.log(chalk.blue.bgWhite.bold("SENAI"));

// console.log(chalk.blue('Curso',' de',' Node.JS'));

// console.log(chalk.red('vermelho',chalk.underline.bgBlue('azul')));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);



 /*function trataErro(erro){

console.log(erro)
 throw new Error(chalk.red(erro.code, "não ha arquivo no diretorio"))

 }*/


// function pegaArquivo(caminhoDoArquivo){
//     const encoding="utf-8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{

// if(erro){

//     trataErro(erro)

// }

//         console.log(chalk.green(texto));
 
 
//     })
// }
// pegaArquivo('./arquivos/')

function trataErro(erro){

    console.log(erro)
     throw new Error(chalk.red(erro.code, "não ha arquivo no diretorio"))
    
     }

 async function pegaArquivo(caminhoDoArquivo){

    try{

        const encoding="utf-8"
        const texto= await fs.promises.readFile(caminhoDoArquivo,encoding)
    console.log(chalk.green(texto))

    }
catch{(erro)


    trataErro(erro)
}finally{

console.log(chalk.cyan("Operação concluida"))
}


}
pegaArquivo("./arquivos/texto.md");
pegaArquivo("./arquivos/");
