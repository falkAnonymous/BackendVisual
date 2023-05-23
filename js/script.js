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
    let TaxaCambio = 4.951;
    let real = document.getElementById('Real').value;
    let dolar = (real * TaxaCambio).toFixed(2);
    document.getElementById('Resultado-real').innerHTML = "$"+dolar

}
function Fahrenheit() {
    let Celsius = parseInt(document.getElementById('Celsus').value)
    let Fahrenheit = Celsius * 9 / 5 + 32;
    let resultFahrenheit = Fahrenheit
    document.getElementById('resultado-celsus').innerHTML = resultFahrenheit + "Fº";
    // if(resultFahrenheit == 0){
    //     document.getElementById('resultado-celsus').innerHTML = "Não é possível calcular por zero";
    // }
}
function Baskhara1(){
    let a, b, c;
    a = parseInt(document.getElementById('A').value);
    b = parseInt(document.getElementById('B').value);
    c = parseInt(document.getElementById('C').value);
    let delta = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    document.getElementById("resultado-baskx1").innerHTML = "X1"+ x1.toFixed(2)
    document.getElementById("resultado-baskx2").innerHTML = "X2" + x2.toFixed(2)
    // if(a == 0 && b == 0 && c == 0){
    //     document.getElementById("resultado-baskx1").innerHTML = "Não é possível calcular por zero"
    //     document.getElementById("resultado-baskx2").innerHTML = "Não é possível calcular por zero"
    // }
}
function Retangulo(){
    base = parseInt(document.getElementById('retangulo1').value);
    altura = parseInt(document.getElementById('retangulo2').value);
    retangulo = base * altura;
    document.getElementById('retangulo-resultado').innerHTML = retangulo;
}