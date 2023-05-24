function circulo() {
    const PI = Math.PI;
    let raio = parseInt(document.getElementById('circulo1').value);
    const result = PI.toFixed(2) * Math.pow(raio, 2).toFixed(2);
    document.getElementById('circulo-resultado').innerHTML = result;

}

function hipotenusa() {
    let co = parseInt(document.getElementById('hipotenusa1').value);
    let ca = parseInt(document.getElementById('hipotenusa2').value);
    let h = Math.sqrt(Math.pow(co, 2) + Math.pow(ca, 2)).toFixed(2);
    document.getElementById('hipotenusa-resultado').innerHTML = h;
}
function realDolar() {
    let TaxaCambio = 4.951.toFixed(2);
    let dolar = document.getElementById('Real').value;
    let real = (dolar * TaxaCambio).toFixed(2);
    document.getElementById('Resultado-real').innerHTML = "R$" + real

}
function Fahrenheit() {
    let Celsius = parseInt(document.getElementById('Celsus').value)
    let Fahrenheit = Celsius * 9 / 5 + 32;
    if (Celsius == 0) {
        document.getElementById('resultado-celsus').innerHTML = `Temperatura ${Fahrenheit} ínvalida`
    }else if(isNaN(Celsius)){
        document.getElementById('resultado-celsus').innerHTML = "Adicione um numero" 
    } 
    else{
        document.getElementById('resultado-celsus').innerHTML = Fahrenheit + "Fº";
    }

    // if(resultFahrenheit == 0){
    //     document.getElementById('resultado-celsus').innerHTML = "Não é possível calcular por zero";
    // }
}
function Baskhara1() {
    let a, b, c;
    a = parseInt(document.getElementById('A').value);
    b = parseInt(document.getElementById('B').value);
    c = parseInt(document.getElementById('C').value);
    let delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0 || (a === 0 && b === 0)) {
        document.getElementById('resultado-baskx1').innerHTML = ("Erro: A equação não possui solução real.");
        return;
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)

    if (isNaN(x1) || isNaN(x2)) {
        document.getElementById('resultado-baskx1').innerHTML = ("Erro: A equação possui solução imaginária.");
        document.getElementById('resultado-baskx2').innerHTML = ("Erro: A equação possui solução imaginária.");
        return;
    }
    document.getElementById("resultado-baskx1").innerHTML = "X1 = " + x1.toFixed(2)
    document.getElementById("resultado-baskx2").innerHTML = "X2 = " + x2.toFixed(2)
    // if(a == 0 && b == 0 && c == 0){
    //     document.getElementById("resultado-baskx1").innerHTML = "Não é possível calcular por zero"
    //     document.getElementById("resultado-baskx2").innerHTML = "Não é possível calcular por zero"
    // }
}
function Retangulo() {
    base = parseInt(document.getElementById('retangulo1').value);
    altura = parseInt(document.getElementById('retangulo2').value);
    retangulo = base * altura;
    document.getElementById('retangulo-resultado').innerHTML = retangulo;
}
function Triangulo() {
    base = parseInt(document.getElementById('triangulo1').value)
    altura = parseInt(document.getElementById('triangulo2').value)
    area = ((base * altura) / 2).toFixed(2)
    document.getElementById('resultado-triangulo').innerHTML = area;
}
km_ms = () => { //Função anônima
    KmHora = parseInt(document.getElementById('Km').value);
    mSegundo = (KmHora / 3.6).toFixed(2);
    if (KmHora <= 0) {
        document.getElementById('resultado-km').innerHTML = `Não é possível converter ${KmHora}kms em Ms`;
    } else if (isNaN(KmHora)) {
        document.getElementById('resultado-km').innerHTML = "Ponha um valor";
    } else {
        document.getElementById('resultado-km').innerHTML = mSegundo + " ms";
    }
}

function Media() {
    nota1 = parseFloat(document.getElementById('Nota1').value);
    nota2 = parseFloat(document.getElementById('Nota2').value);
    nota3 = parseFloat(document.getElementById('Nota3').value);
    media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
    document.getElementById('resultado-media').innerHTML = "Media Final: " + media

}
function Dividir() {
    numerador = parseFloat(document.getElementById().value);
    denominador = parseFloat(document.getElementById().value);
    quociente = (numerador / denominador).toFixed(2);
    if (quociente == 0) {
        document.getElementById('').innerHTML = "Não existe divisão divisão por 0";
    }
    else {
        document.getElementById('').innerHTML = quociente;
    }
}