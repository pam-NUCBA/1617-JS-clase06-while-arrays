//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
//* https://www.w3schools.com/js/js_array_methods.asp

const animales = ["canguro", "camello", "perro", "gato"];
const comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];

//console.log(comidas) //es array
//*metodos:
//convertirlo a string:

//* la a es como un placeholder. Es el "alias" del array que vayan a pasar, y pueden pasar cualquier array que tengan ganas
const arrToString = (a) => console.log(a.toString());
// arrToString(animales);
// arrToString(comidas)

//si fuera con funcion "tradicional" lo escribiríamos así
function arrToString2(a) {
  console.log(a.toString());
}

//arrToString2(animales);
//arrToString2(comidas)

//a string pero con un caracter de separacion custom - en mi opinion, es mejor:
//*flecha en una sola línea tiene return implicito
const arrJoin = (a) => a.join(", ");
console.log(arrJoin(comidas)); //es string

//* estp va a dar undefined!
function arrJoin2(a) {
  a.join(", ");
}

console.log(arrJoin2(animales)); //sin return da undefined!

//*así lo corregimos
function arrJoin3(a) {
  return a.join(", ");
}

console.log(arrJoin3(animales));

//*con flecha puede fallar tambien, si es multilínea. Ahí requiere el return:
const arrJoin4 = (a) => {
  a.join(", ");
};

console.log(arrJoin4(comidas));
