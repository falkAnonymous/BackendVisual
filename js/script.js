function circulo() {
    const PI = Math.PI;
    let raio = parseInt(document.getElementById('circulo1').value);
    const result = PI.toFixed(2) * Math.pow(raio, 2).toFixed(2);
    document.getElementById('circulo-resultado').innerHTML = result;
    
}

function hipotenusa() {
    let co;
    let ca;
    let h = Math.pow(co = prompt(), 2) + Math.pow(ca = prompt(), 2);
    alert(Math.pow(h, 2));
}
function realDolar() {
    let TaxaCambio = 4.951;
    let real = prompt();
    let result = real / TaxaCambio;
    let dolar = result;
    alert(dolar)
}
function Fahrenheit() {
    let Celsius = prompt()
    let Fahrenheit = Celsius * 9 / 5 + 32
    let resultFahrenheit = Fahrenheit
    alert(resultFahrenheit)

}
function Baskhara1() {
    let a, b, c;
    a = parseInt(prompt());
    b = parseInt(prompt());
    c = parseInt(prompt());
    let delta = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    alert(x1 + "\n" + x2)

}