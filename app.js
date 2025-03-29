
// Inicialización de un Arreglo

let animales = ["Perro", "Gato","Conejo","Pez","Aguila"]

console.log(animales) //Toda la lista

console.log(animales[2]) //Indicar el indice para imprimir un elemento especifico

console.log(animales.length) //Cantidad de elementos en la lista .length
console.log(typeof animales) //Tipo de dato de la lista

// Cambiar un elemento --- Perro por Elefante

animales[0] = "Elefante"
console.log(animales) 

//Agregar un nuevo elemento ---- push

animales.push("Ratón")  //Agrega un nuevo elemento a la lista (al final)
console.log(animales)

//Eliminar un elemento 

//Eliminar el último elemento de la lista ---- pop

animales.pop()
console.log(animales) 

//Agregar elemento al inicio de la lista

animales.unshift("León")
console.log(animales)

//Buscar el indice de un elemento 

//animales.indexOf("Gato")

let indeceDelGato = animales.indexOf("Gato")
console.log(animales[indeceDelGato]) 
console.log(indeceDelGato) // Número de posición del elemento en la lista
console.log(animales[animales.indexOf("Gato")]) 

//Determinar si un elemento existe en la lista

console.log(animales.includes("Tortuga"))

animales.push("Tortuga")    //Agregamos el elemento 
console.log(animales.includes("Tortuga")) // True porque ya se agregó el elemento


//Invertir la lista

let animalesInvertidos = animales.reverse()
console.log(animalesInvertidos)

//Ordenar la lista

console.log(animales.sort())

//Eliminar un indice especifico de la lista

animales.splice(0,1)  //Elimina el primer elemento de la lista --- (posición del elemento, cantidad de elementos a eliminar)
console.log(animales)

//PRACTICA

//lISTA INICIAL: let animales = ["Perro","Gato","Conejo","Pez","Aguila"]

// LISTA FINAL: let animales = ["Aguila","Conejo","Pez","león"]

animales.splice(0,1)
console.log(encontraGato(animales))
animales[0] = animales[3]
console.log(encontraGato(animales))
animales.pop()
animales.push("León")

console.log(animales)



//Funciones 

function encontraGato(lista) {
    let result = lista.includes("Gato") 
    return result
}
