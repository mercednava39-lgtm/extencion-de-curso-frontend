
function saludar(nombre){
    //lo que va a hacer mi funcion
    return "hola" + nombre; //retornando el resultado

}
saludar("ana"); //llamar a mi funcion saludar

let saludo = saludar("fatima")

console.log(saludar("ana"));
console.log(saludo);

function sumar(a,b){
    console.log(a + b); //resultado en console
}
sumar(2,3);

//entrega un valor para usarlo despues
function restar(num1,num2){
    let resultado = num1 - num2;
    return resultado; //esta variable es local
}
console.log(restar(10,7));

let resultado; //variable global
console.log(resultado);


function sinReturn(){
    let x = 5;
}
//logra ejecutar la funcion pero no regresa nada
console.log(sinReturn()) //undefine

function multiplicar(dato1, dato2){
    return dato1 * dato2;
}
console.log(multiplicar(4)) //not a number, hace falta pasarle argumento

//console.log(ana) //da error porque la variable no esta definida

//funcion flecha
const dividir = (a,b) => a/b; //return automatico   
console.log(dividir(15,2));

const suma = (a,b) => {  //funcion mas larga con {} no tiene retur automatico
    return a + b;
}
console.log(suma(3,4));

const multi = (a,b) => {return a * b}

console.log(multi(10,5));

//funcion anonima (no se necesita darle nombre, ejecuta algo puntual)
//callbacks
/* setTimeout(function(){
    console.log("esto se ejecuta despues...")
}, 5000); */

//cuando no se utilizan fuc anonimas
/* se tiene que reutilizar muchas veces
tiene logica grande
necesita ser testeada
se necesita claridad */

function mascotas(a,b,c){
    console.log("nombres de las mascotas", a + b + c)
}

mascotas("lili", "lolo", "coco");


function areadetriangulo(base,altura){
return(base*altura) / 2
}
console.log(areadetriangulo (4,5))

function numerosprimos(valor1){
    if(valor1 % 2 === 0){
        console.log("el numero es par")
        return true

        
    } else{
        console.log("el numero es impar")
        return false
        
    }
    
}
numerosprimos(6);

