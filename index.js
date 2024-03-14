import fs from 'fs';

import chalk from 'chalk';
import { error } from 'console';




const textoTest="São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações"


function extraLinks(texto){


    const regex = /\[[^[\]]*?]\(https?:\/\/[^\s?#.]*[^\s]*\)/gm;

    const capturas = texto.match(regex);

    console.log(capturas)
}


extraLinks(textoTest)

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

/*function trataErro(erro){

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
*/