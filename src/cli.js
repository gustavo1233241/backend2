
import pegaArquivo from "./index.js";
import fs from "fs"
import chalk from "chalk";
const caminho = process.argv;

console.log(caminho)



function imprimeLista(resultado, identigacador='') {

    console.log(chalk.yellow('lista resultados'), 
    chalk.black.bgCyan(identigacador), 
    resultado);

}

//pegaArquivo(caminho[2])

async function processaTexto(argumentos) {
    const caminho = argumentos[2];



    try{


        fs.statSync(caminho)


    }
    catch(erro){

if(erro.code === "ENOENT"){

    console.log("Arquivo ou diretorio não encontrado");
    return;
}
      
    }

    if (fs.lstatSync(caminho).isFile()) {

        const resultado = await pegaArquivo(caminho);
        //console.log(chalk.yellow('lista resultados'), resultado);
        imprimeLista(resultado)
    }
    else if (fs.lstatSync(caminho).isDirectory()) {

        const arquivos = await fs.promises.readdir(caminho);

        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
            // console.log(lista);
            // console.log(`${caminho}/${nomeDoArquivo}`);
            imprimeLista(lista,nomeDoArquivo);
        });


    }

}

export default pegaArquivo;
//console.log("oi")
processaTexto(caminho);
