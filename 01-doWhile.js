let num = 0;

while (num <= 10) {
  console.log("con while", num);
  num++;
}

let num2 = 0;

do {
  console.log("con do while:", num2);
  num2++;
} while (num2 <= 10);

//* peeeero:

let num3 = 15;

//*acá primero chequea y solo ejecuta si es true
while (num3 <= 10) {
  console.log("con while v2", num3);
  num3++;
}

let num4 = 15;
//*acá primero dispara y después hace preguntas:
do {
  console.log("con do while v2", num4);
  num4++;
} while (num4 <= 10);
