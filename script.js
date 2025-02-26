function calcular() {

    var num1 = document.getElementById("numero1")
    var num2 = document.getElementById("numero2")
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var res = document.getElementById("res")
    var soma = n1 + n2

    res.innerHTML = `A soma entre os dois número é ${soma}`
}