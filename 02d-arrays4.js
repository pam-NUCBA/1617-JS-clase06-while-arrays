let comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];
let animales = ["canguro", "camello", "perro", "gato"];

//*unshift agrega al principio, sube el index de lo demás, retorna el largo:
const unShiftArr = (arr) => arr.unshift("tortuga");
console.log(unShiftArr(animales));
console.log(animales);

//*splice es un poco distinto: tiene dos parametros, posicion desde la que sacar, y cantidad qie sacar. Tercer parámetro, sería con qué reemplaza

const spliceArr = (a) => a.splice(0, 2);
console.log("sacó: ", spliceArr(comidas));
console.log("quedaron:", comidas);

//atentos! la tortuga la agregué con el unshift y se va a acordar!
console.log(animales);
console.log("sacó: ", spliceArr(animales));
console.log("quedaron:", animales);
