/*AL FINALIZAR LA GUIA DE EJERCICIOS ELABORE UN ALGORITMO QUE PUEDA 
EJECUTAR TODOS LOS EJERCICIOS CON UN MENU DE SELECCIÓN NUMERICA Y AL 
FINALIZAR EL EJERCICIO VOLVER AL MENU A MODO DE QUE EL PROGRAMA NO SE 
CIERRE.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function inicio(){ 
    
    rl.question(" \n*************************** MENU *************************** \n 1. Determinar si un número ingresado por el usuario es positivo, negativo o si es cero. \n 2. Calcular el mayor de 3 números. \n 3. Calcular la factorial de un número !. \n 4. Determinar si un numero es par o es impar.  \n 5. Evalúa el tipo de color que saldrá de una mezcla de colores primarios. \n 6. Determinar el nombre del mes según el número ingresado. \n 7. Determinar el tipo de vehículo seleccionado según la categoría.\n\nDigite el numero de ejercicio que desea ejecutar: ", (ejercicios) => {  
        
        if (parseInt(ejercicios) === 1) {
            ejercicio1();
        }else if(parseInt(ejercicios) === 2){
            ejercicio2();
        }else if(parseInt(ejercicios) === 3){
            ejercicio3();
        }else if(parseInt(ejercicios) === 4){
            ejercicio4();
        }else if(parseInt(ejercicios) === 5){
            ejercicio5();
        }else if(parseInt(ejercicios) === 6){
            ejercicio6();
        }else if(parseInt(ejercicios) === 7){
            ejercicio7();
        }else {
            console.log("\nDigite una opcion valida\n")
            inicio();
        }
    })
}

inicio();


/*1. Determinar si un número ingresado por el usuario es positivo, negativo o si es 
cero.
*/

function ejercicio1(){
    
    function evaluar(numero){
        if (numero >= 1) {
            return console.log("El numero " +numero + " es positivo")
            }else if(numero <= -1){
                return console.log("El numero " +numero + " es negativo")
                }else{
                    return console.log("El numero es 0");
                }   
    }
      
    rl.question("Ingrese un número: ", (numero) => {  
        const num = evaluar(numero);
        inicio(); 
    })

    
} 


/*2. Calcular el mayor de 3 números ingresados por el usuario.*/

function ejercicio2(){

function Calcular(numero1, numero2, numero3 ){
    if (parseFloat(numero1) >= parseFloat(numero2) && parseFloat(numero1) >= parseFloat(numero3)) {
        return console.log(numero1 + " es mayor")
    }else if(parseFloat(numero2) >= parseFloat(numero1) && parseFloat(numero2) >= parseFloat(numero3)){
        return console.log(numero2 + " es mayor")
    }else if(parseFloat(numero3) >= parseFloat(numero1) && parseFloat(numero3) >= parseFloat(numero2)){
        return console.log(numero3 + " es mayor")
    }
    inicio()
}

rl.question("Ingrese el primer número: ", (numero1) => {  
    rl.question("Ingrese el segundo número: ", (numero2) =>{
        rl.question("Ingrese el tercer numero: ", (numero3) =>{
            const num = Calcular(numero1, numero2, numero3);
            inicio();
        })
    })
})
}


/*3. Calcular la factorial de un número !, el factorial es ir multiplicando el 
resultado  la posición del número. El estado inicia es 1.
*/


function ejercicio3(){
    function CalcularFac(n1){
        let resultado = 1;
        for(let i = 1; i <= parseFloat(n1); i++){
            resultado *= i;
        }
        console.log("El factorial es: " + resultado);
    };
    
    rl.question("Digite el numero a realizar el factorial: ", (n1) => {
        const num = CalcularFac(n1);
        inicio();
    })
}


/*4. Determinar si un numero es par o es impar.*/

function ejercicio4(){
    function Determinar(num){
        if(parseFloat(num) % 2 === 0){
            console.log("El numero es par");
        }else{
            console.log("El numero no es par");
        }
    }
    
    rl.question("Ingrese el numero a evaluar: ", (num) => {
        const numero = Determinar(num);
        inicio();
    })
}



/*5. Crear un algoritmo donde se evalúa el tipo de color que saldrá de una mezcla 
de colores primarios.
Colores primarios: rojo, amarillo y azul.
Las combinaciones que el algoritmo evalúa son las siguientes:
• Azul y amarillo = verde
• Azul y rojo = morado
• Rojo y amarillo = naranja 
• Si se usa otra combinación de colores arrojar una alerta de error.

*/
function ejercicio5(){
    
function Algoritmo(color1, color2){
    if(color1 === "azul" && color2==="amarillo"){
        console.log("La mezcla genera el color verde")
    }else if(color1 === "azul" && color2==="rojo"){
        console.log("La mezcla genera el color morado")
    }else if(color1 === "rojo" && color2==="amarillo"){
        console.log("La mezcla genera el color naranja")
    }else{
        console.log("La combinación no se encuentra disponible")
    }
}

rl.question("Ingrese el primer color : ", (color1) => {
    rl.question("Ingrese el primer color : ", (color2) => {
        const colores = Algoritmo(color1, color2);
        inicio();
    })
})
}


/*6. Determinar el nombre del mes según el número ingresado por el usuario, 
tomar en cuenta que los números va 1= Enero, 2=Febrero… etc. */

function ejercicio6(){
    function Mes(nMes){
        let nombreMes;
    
        switch (parseInt(nMes)) {
            case 1:
                nombreMes = "Enero"
            break;
    
            case 2:
                nombreMes = "Febrero"
            break;
    
            case 3:
                nombreMes = "Marzo"
            break;
    
            case 4:
                nombreMes = "Abril"
            break;
    
            case 5:
                nombreMes = "Mayo"
            break;
    
            case 6:
                nombreMes = "Junio"
            break;
    
            case 7:
                nombreMes = "Julio"
            break;
    
            case 8:
                nombreMes = "Agosto"
            break;
    
            case 9:
                nombreMes = "Septiembre"
            break;
    
            case 10:
                nombreMes = "Octubre"
            break;
    
            case 11:
                nombreMes = "Noviembre"
            break;
    
            case 12:
                nombreMes = "Diciembre"
            break;
    
            default:
                nombreMes = "Numero de mes no existe"
                break;
        }
        console.log(nombreMes)
    }
    
    rl.question("Digite el numero de mes a conocer: ", (nMes) =>{
        const mes = Mes(nMes);
        inicio();
    })
    
}



/*7. Determinar el tipo de vehículo seleccionado según la categoría que se ingrese, 
las categorías son las siguientes: Moto, Auto, Camion y Bicicleta.*/

function ejercicio7(){
    function Mes(categoría){
        let tipoVehiculo;
    
        switch (categoría) {
            case 'Moto':
                tipoVehiculo = "Motocicleta"
            break;
    
            case 'Auto':
                tipoVehiculo = "Automovil"
            break;
    
            case 'Camion':
                tipoVehiculo = "Super Camión"
            break;
    
            case 'Bicicleta':
                tipoVehiculo = "Super bicicleta"
            break;
    
            
            default:
                tipoVehiculo = "La categoria digitada no existe"
                break;
        }
        console.log(tipoVehiculo)
    }
    
    rl.question("Digite la categoria del vehiculo: ", (categoria) =>{
        const mes = Mes(categoria);
        inicio();
    })
}


