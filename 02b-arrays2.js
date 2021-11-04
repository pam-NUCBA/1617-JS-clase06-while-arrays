const comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];
const animales = ["canguro", "camello", "perro", "gato"];

//*quitar el último y retornarlo:
const popArr = (a) => a.pop();

//*no podría hacer esto (reasignar)
//comidas = ["sarasa", "sarasita"]

//*pero síiii puedo aplicarle métodos
console.log(popArr(comidas)); //pop nos RETORNA lo que sacó
console.log(comidas); //acá ya pueden ver que el último no está
console.log(popArr(animales));
console.log(comidas.pop());
