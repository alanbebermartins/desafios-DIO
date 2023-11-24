/*
Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


let nomeDoHeroi = "Gendalf";

function saldoDeVitorias(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function calculoDeRanqueamento(){

    let resultadoDoRanqueamento = saldoDeVitorias(150, 5)

    if(resultadoDoRanqueamento <= 10){
        console.log(`O Herói ${nomeDoHeroi} possui ${resultadoDoRanqueamento} vitorias, e está no nível de Ferro`)
    } else if (resultadoDoRanqueamento > 10 && resultadoDoRanqueamento <= 20){
        console.log(`O Herói ${nomeDoHeroi} possui ${resultadoDoRanqueamento} vitorias, e está no nível de Bronze`)
    } else if (resultadoDoRanqueamento > 20 && resultadoDoRanqueamento <= 50){
        console.log(`O Herói ${nomeDoHeroi} possui ${resultadoDoRanqueamento} vitorias, e está no nível de Prata`)
    }else if (resultadoDoRanqueamento > 50 && resultadoDoRanqueamento <= 80){
        console.log(`O Herói ${nomeDoHeroi} possui ${resultadoDoRanqueamento} vitorias, e está no nível de Ouro`)
    }else if (resultadoDoRanqueamento > 80 && resultadoDoRanqueamento <= 90){
        console.log(`O Herói ${nomeDoHeroi} possui ${resultadoDoRanqueamento} vitorias, e está no nível de Diamante`)
    }else if (resultadoDoRanqueamento > 90 && resultadoDoRanqueamento <= 100){
        console.log(`O Herói ${nomeDoHeroi} possui ${resultadoDoRanqueamento} vitorias, e está no nível de Lendário`)
    }else if (resultadoDoRanqueamento > 100){
        console.log(`O Herói ${nomeDoHeroi} possui ${resultadoDoRanqueamento} vitorias, e está no nível de Imortal`)
    }
}

calculoDeRanqueamento()