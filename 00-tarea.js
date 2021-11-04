//2. hacer un loop que devuelva los multiplos de 3 menores a 40.

for (let i = 0; i < 40; i++) {
  i % 3 === 0 && console.log(i);
}

// shortcircuit: (condicion) && (ejecuta si es true)
// ternario: (condicion) ? (ejecuta si true) : (ejecuta si false)