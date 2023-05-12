function verificaOChute(chute){
    const numero= +chute;

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML +='<div>valor inválido</div>'
        return
    }

    if(numeroForaDosParametros(numero)){
       elementoChute.innerHTML +=`<div> Fale um numero entre ${menorValor} e ${maiorValor}</div>`
       return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button onclick='jogarDnv()' class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDosParametros(numero){
    return numero > maiorValor || numero < menorValor;
}

function jogarDnv(){
    location.reload();
}