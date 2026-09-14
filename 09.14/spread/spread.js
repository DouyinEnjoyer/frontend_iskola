// spread operátor - tömböt bontja elemeire

const szamok = [1, 2, 3, 4, 5];

console.log(szamok);

console.log(...szamok);

const ujSzamok = [-3, -4, -5, ...szamok];

console.log(ujSzamok);

// rest paraméter - függvény paramétereit gyurja ossze egy tombbe

function atlag(...szamok) {
  let osszeg = 0;
  for (let i = 0; i < szamok.length; i++) {
    osszeg += szamok[i];
  }
  return osszeg / szamok.length;
}

console.log(atlag(12, 19));
console.log(atlag(4, 8, 3));
console.log(atlag(1, 23, 25, 7, 434, 76, 3));
