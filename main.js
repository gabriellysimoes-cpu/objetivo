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
const tempoObjetivo = new Date("2026-10-05T00:00:00)")