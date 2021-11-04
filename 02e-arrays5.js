const alumnos = ["Yves", "Exequiel", "Matias", "Danila", "Drazen"];

const cambiandoAlumnos = (arr) => {
  arr.shift(); //saca del principio
  arr.unshift("Leonardo"); //agrega al principio
  arr.push("Yves"); //agrega al final
  console.log(arr); //no necesita return porque pusimos console.log
};

cambiandoAlumnos(alumnos);
