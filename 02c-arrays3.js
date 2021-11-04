let comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];
let animales = ["canguro", "camello", "perro", "gato"];

//*push agrega AL FINAL y retorna el nuevo largo
const pushArr = (arr) => arr.push("queso")
console.log(pushArr(comidas))
console.log(comidas)

//pasando todo como param:
const arrToPush = (a, b) => console.log(a.push(b));
arrToPush(comidas, "queso")
console.log(comidas)

//*shift saca el primero (como un pop al vesre). Además le baja el index al resto del array
const shiftArr = arr => arr.shift()
console.log(shiftArr(animales))
console.log(animales[0]) //antes en 0 estaba canguro, ahora está camello. Con [num], me va a traer lo que esté en ese numero de posicion

