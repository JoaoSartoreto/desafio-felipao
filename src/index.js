//Declaração de uma constante para realizar a entrada e saida de dados
const readline = require('readline');

//Configuração da interface de entrada e saida de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nivel(xp){
    let nivel;

    if (xp >= 0 && xp <= 1000) {
        nivel = "Ferro";
    }
    else if(xp <= 2000){
        nivel = "Bronze";
    }
    else if(xp <= 5000){
        nivel = "Prata";
    }
    else if(xp <= 7000){
        nivel = "Ouro";
    }
    else if(xp <= 8000){
        nivel = "Platina";
    }
    else if(xp <= 9000){
        nivel = "Ascendente";
    }
    else if(xp <= 10000){
        nivel = "Imortal";
    }
    else{
        nivel = "Radiante";
    }

    return nivel;
}

//Função para capturar o nome e a experiencia do herói
rl.question('Digite o nome do herói: ', (name) => {
    rl.question('Digite o xp do herói: ', (xp) =>{
        let xpInt = parseInt(xp)
        console.log(`O Herói de nome **{${name}}** está no nível de **{${nivel(xpInt)}}**`);
        rl.close();
    });
});



