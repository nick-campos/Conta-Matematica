function calcular() {

    var calculo = {
    num1: document.getElementById("numero1"),
    num2: document.getElementById("numero2"),
    res: document.getElementById("res"),
    opcoes: document.getElementById("operadores")
    }

    var resultado = {
    n1: Number(calculo.num1.value),
    n2: Number(calculo.num2.value),
    }

    var opcoes;
    switch (calculo.opcoes.value) {
    
        case "+": 
            opcoes = resultado.n1+resultado.n2;
            break;
    
        case "-":
            opcoes = resultado.n1-resultado.n2;
            break;
        
        case "/":
            opcoes = parseFloat((resultado.n1/resultado.n2).toFixed(2));
            break;

        case "*":
            opcoes = resultado.n1*resultado.n2;
            break;
    }

    calculo.res.innerHTML = `O cálculo entre ${resultado.n1} e ${resultado.n2} é ${opcoes}`
}