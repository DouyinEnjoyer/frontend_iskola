let szam = 3;
szam = 3.14;
let szoveg = "Szia Uram!";
szoveg = "Hello-bello";

let osszefuzve = "A kedvenc számom: " + szam;
osszefuzve = `A kedvenc számom ${szam}`;

let logika = true;
logika = false;

let n = null;
let u = undefined;

let szam2 = 12.23;
// döntsük el, hogy a szam2 pozitiv-e

if (szam2 > 0) {
  console.log("pozitiv");
} else if (szam2 < 0) {
  console.log("negativ");
} else {
  console.log("nem pozitiv");
}

// találos kérdés: mit ir ki

let i = undefined;
for (i = 0; i < 10; i++) {
  console.log(i);
}
console.log("szunet");
let paros = 2;

while (paros <= 10) {
  console.log(paros);
  paros += 2;
}

////////

//tömbök

let autok = ["Audi", "BMW", "Toyota", "Kia"];

console.log(autok[0]);
autok[1] = "Ford";
console.log(autok[1]);

// új elem hozzáfüzése (tömb végére)

autok.push("Alfa Romeo");

// tömb bejárása

for (i = 0; i < autok.length; i++) console.log(`${i}.: ${autok[i]}`);

console.log(`törölt elem: ${autok.pop()}`);

// függvények
// camelCase szavankent nagy kezdobetu kiveve az elso
function udvozlet() {
  console.log("üdvüzöllek Kazi");
}

let udv = () => {
  console.log("dicsőlovag");
};

udvozlet();
udv();

function negyzetreEmel(num) {
  return num * num;
}

let negyzet = (num) => num * num;

// tömbök folytatása

//elem szürése

console.log(autok.filter((auto) => auto == "Toyota"));

//törlés kitöröljük a toyotákat

autok = autok.filter((auto) => auto != "Toyota");
console.log(autok);

// index meghatározása érték alapján

autok.push("Honda", "Mercedes", "BYD");

console.log(autok.findIndex((auto) => auto == "BYD"));

//spread operátor   szétbontja elemeire a tombot

autok = ["Seat", ...autok, "Nissan"];

console.log(autok);

// Rest paramétre
// keszitsunk fuggvenyt amely szamokat ad ossze es vissua adja a aszamok osszeget

function Osszead(...szamok) {
  let osszeg = 0;
  for (i = 0; i < szamok.length; i++) {
    osszeg += szamok[i];
  }
  return osszeg;
}

console.log(Osszead(1, 2, 3));

console.log(autok.includes("opel"));

console.log(autok.includes("Honda"));

console.log(autok.toString());

console.log(autok.at(2));

console.log(autok.shift());

console.log(Array.isArray(szam));
console.log(Array.isArray(autok));

// feladat:

/*
  adott egy ot elemu tomb amely egesz szamokat tartalmaz [36, -2, 112,101,22]
  adjon hozza a tombbhoz 10 uj veletlen egesz szamot [-100;+100] tartomanybol
  math.random()
  math.floor()
  2. szurjuk ki egy uj tombbe a pozitiv es paros szamokat
  3. dontsuk el(igen/nem) hogy az uj tomben van e 100nal nagyobb szam
  4. határozzuk meg az uj tomb legnagyobb értéku elemet
  
*/

let tomb = [36, -2, 112, 101, 22];
let max = 100;
let min = -100;
for (i = 0; i < 10; i++) {
  tomb.push(Math.floor(Math.random() * (max - min) + min));
}
console.log(`random+tomb ${tomb}`);
let ujtomb = [];
tomb = tomb.filter((pozpar) => {
  if (pozpar > 0 && pozpar % 2 == 0) {
    ujtomb.push(pozpar);
  }
});
console.log(`ujtomb ${ujtomb}`);
let igen = false;
for (let j of ujtomb) {
  if (j > 100) {
    igen = true;
  }
}
console.log(`van e benne 100nal nagyobb ${igen}`);
let legnagyobb = ujtomb[0];
for (i = 0; i < ujtomb.length; i++) {
  if (legnagyobb < ujtomb[i]) legnagyobb = ujtomb[i];
}

console.log(`legnagyobb szam ${legnagyobb}`);
