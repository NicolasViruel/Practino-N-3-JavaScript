/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
 Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
 */
/*
 let meses = [" enero " + "<br>" + " febero" + "<br>" + " marzo " + "<br>" + " abril "+ "<br>"+ " mayo "+"<br>"+" junio " + "<br>" + " julio "+ "<br>" + " agosto " + "<br>" + " septiembre " + "<br>" + " octubre " + "<br>" + " noviembre " + "<br>" + " diciembre "]
 document.write(meses);
 */
/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
 cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/
/*
let ciudadesGuardadas = []


do {let ciudades = (prompt("Ingrese su ciudad"))

    ciudadesGuardadas.push(ciudades);
} while (confirm("Pulse Aceptar si desea agregar otra ciudad")); 
document.write("Las ciudades que usted escogio fueron: " +  ciudadesGuardadas);

document.write("<br>" + "<br>" + "La cantidad de ciudades que ingreso fueron: " + ciudadesGuardadas.length)

document.write("<br>" + "<br>" + "La posicion de la primera es " + ciudadesGuardadas[0]);
document.write("<br>" + "<br>" + "La posicion de la tercera es " + ciudadesGuardadas[2]);
document.write("<br>" + "<br>" + "La posicion de la ultima es " + ciudadesGuardadas[ciudadesGuardadas.length - 1]);
document.write("<br>" + "<br>" + "La posicion de la segunda es " + ciudadesGuardadas[1]);
ciudadesGuardadas.push("paris")
document.write("<br>" + "<br>" + ciudadesGuardadas);

ciudadesGuardadas.splice(1 , 1 , "BARCELONA")
document.write("<br>" + "<br>" + "Cambiamos la segunda ciudad por " + ciudadesGuardadas );
*/


/*
3- Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6
para cada uno de los lanzamientos de los dados.
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
repitiendo 50 veces esta operación.
*/
/*
let resultado = []

for (let index = 0; index <= 50; index++) {
   let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
   let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
   document.write("El primer dado: " + dado1 + "<br>")
   document.write("El segundo dado: " + dado2 + "<br>")
   let suma = dado1 + dado2
   document.write("La suma es " + suma + "<br>" + "<br>")
   resultado.push (suma)
}



for (let j = 0; j < resultado.length; j++) {
    document.write("el resultado es : " + resultado[j] + "<br>")
    
}
*/
/*
1- Escribir el código de una función a la que se pasa como parámetro un número entero
 y devuelve como resultado una cadena de texto que indica si el número es par o impar.
  Mostrar por pantalla el resultado devuelto por la función.
*/
/*
function numeroparoimpar(numero) {

    if (numero % 2 == 0) {
        return numero + " Es Par "
    } else{
        return numero + " Es Impar "
    }
}
let numero = parseInt(prompt("Ingrese un numero, para saber si es Par o Impar"))
document.write (numeroparoimpar (numero))
*/
/*
2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
sólo por minúsculas o por una mezcla de ambas.
*/
/*
let texto = prompt("Ingrese una cadena de texto")

function textoMayMin(texto) {
    if (!isNaN (texto)) {
        alert("Ingrese texto con letras no numeros")
    }
    else if (texto === texto.toUpperCase()) {
        return texto + ("Tiene letras Mayusculas")
    }else if (texto === texto.toLowerCase()) {
        return texto + ("Tiene letras Minisculas")
    }else{
        return texto + ("El texto contiene Mayusculas y Minisculas")
    }
    
}
document.write(textoMayMin(texto))
*/
/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/
/*
let ladoA = parseInt(prompt("Ingrese un valor para el Rectangulo"));
let ladoB = parseInt(prompt("Ingrese otro valor para el Rectangulo"));

function Rectangulo(ladoA, ladoB) {
    let perimetro = 2* (ladoA + ladoB)
    return perimetro + " es el Perimetro de su Rectangulo "
}
document.write(Rectangulo(ladoA , ladoB))
*/
/*
4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10
 del número elegido por el usuario.
*/
/*
 let numero_usuario = parseInt(prompt("Ingrese un valor de tabla"));
    for (let index = 1; index <= 10; index++) {
       document.write(numero_usuario + " X " + index + " = " + (numero_usuario * index) + "<br>"+ "<br>") 
       
    }
*/
    