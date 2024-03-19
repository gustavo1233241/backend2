
import pegaArquivo  from "./index.js";
import fs from "fs"
import chalk from "chalk";
const caminho=process.argv;

console.log(caminho)

//pegaArquivo(caminho[2])

async function processaTexto(argumentos){
    const caminho= argumentos[2];
if(fs.lstatSync(caminho).isFile()){

    const resultado = await pegaArquivo(caminho);
    console.log(chalk.yellow('lista resultados'), resultado);
}
else if(fs.lstatSync(caminho).isDirectory()){

    const arquivos = await fs.promises.readdir(caminho);

    arquivos.forEach(async (nomeDoArquivo)=> {
     const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
     console.log(lista);
     console.log(`${caminho}/${nomeDoArquivo}`);
    });


}

}
processaTexto(caminho);
