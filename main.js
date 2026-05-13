const botoes = document.querySelectorAll(".botao")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)

for(let i = 0; i<botoes.length;i++){
    botoes[i].onclick = function (){
        for(let j=0; j<botoes.length;i++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].ClassList.add("ativo")
        textos[i].ClassList.add("ativo")

    }
}

 const contadores = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("2026-10-05T00:00:00)")
const tempoObjetivo2 = new Date("2026-11-05T00:00:00)")
const tempoObjetivo3 = new Date("2026-12-05T00:00:00)")
const tempoObjetivo4  = new Date("2027-01-05T00:00:00)")

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual
    console.log(tempoFinal)
}