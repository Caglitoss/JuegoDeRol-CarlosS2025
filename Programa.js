/*
área de triangulo Área = 1/2 * base * altura
área de rectángulo A = largo X ancho
Perímetro del rectángulo P = 2 x(largo + ancho)
calcula el resultado de  
Y = X´2 + 6x + 9
*/ 
let base;
let altura;
let ancho;
let largo;
let resultado;
let valorX;
let op = 0;

do{
op = prompt("1: Area de triangulo \n2: Area de rectángulo \n3: Perímetro del rectángulo \n4: Calcula el resultado de Y = X^2 + 6x + 9 \n5: Salir \nIngrese la opcion", "Opcion");

if(op == 1){
    base = prompt("Ingresa la base", "Base");
    altura = prompt("Ingresa la altura", "Altura");
    resultado = 1/2 * base * altura;
    alert("El Area de triangulo es: " + resultado);
} else if(op == 2){
    largo = prompt("Ingresa el largo", "Largo");
    ancho = prompt("Ingresa el ancho", "Ancho");
    resultado = largo * ancho;
    alert("El Area de rectángulo es: " + resultado);
} else if(op == 3){
    largo = prompt("Ingresa el largo", "Largo");
    ancho = prompt("Ingresa el ancho", "Ancho");
    resultado = 2 * largo + 2 * ancho;
    alert("El Perímetro del rectángulo es: " + resultado);
} else if(op == 4){
    valorX = prompt("Ingresa la X", "X");
    resultado = Math.pow(valorX, 2) + 6 * valorX + 9;
    alert("El valor de Y es: " + resultado);
}else if(op == 5){
alert("Gracias por usar el programa");
} else{
alert("Opcion invalida");
}
}while(op != 5);