let s = 'Ez egy "egyszerű" string';

let s2 = `Akár több sorba is lehet
tördel a stringet`;

console.log(s);

// a string tömbként is kezelhető

console.log(s[3]);
console.log(s.length);
console.log(s[49]);
console.log(s[-2]);

// string kezelő függvények

console.log(s.charAt("9"));
console.log(s.at(-1)); //negativ indexre is mukodik
console.log(s.indexOf("e"));
console.log(s.lastIndexOf("e"));
console.log(s.includes("egy"));
console.log(s.substring(9, 10));
console.log(s.replace(" ", "-"));
console.log(s.replaceAll(" ", "-"));

let nev = "   Nikita Buyanov   ";
console.log(nev);
console.log(nev.trim());

let ido = "9:3"; //úgy szeretnénk latni hogy 09:03
console.log(
  ido.substring(0, 1).padStart(2, "0") +
    ":" +
    ido.substring(2, 3).padStart(2, "0"),
);
let szam = "13.7"; // de én azt szeretném hogy 2 tizedesjegyig legyen kiirva

console.log(szam.padEnd(5, "0"));

// konkatenáció
console.log(s.concat(" még valami..."));
console.log(s + " még valami...");

//módosítás

s[0] = "A"; //ilyet nem lehet csinálni
console.log(s);
//helyette
s = "A" + s.substring(1);
console.log(s);

s = s.substring(0, 6) + "X" + s.substring(7);
console.log(s);

//vágás

let adatok = "sipi rupi_szekszard_tanulo_porkolt";
let adatokStringTomb = adatok.split("_");
console.log(adatokStringTomb);

const jellemzok = [
  "Nagy Mária;164;59",
  "Kiss Géza;177.57;64.5",
  "Tóth Bianka;158.3;49",
  "Kálmán Béla;188.1;79",
  "Rácz Teréz;174.18;62.5",
];
// javitás kell :)
for (let a of jellemzok) {
  const b = a.split(";");
  if (!b[2].includes(".")) {
    console.log(
      `Név: ${b[0]}, Magasság: ${(b[1] + ".").padEnd(6, "0")} cm, Súly ${b[2].padEnd(5, 0)} kg`,
    );
  } else {
    console.log(
      `Név: ${b[0]}, Magasság: ${b[1].padEnd(6, "0")} cm, Súly ${b[2].padEnd(5, 0)} kg`,
    );
  }
}
