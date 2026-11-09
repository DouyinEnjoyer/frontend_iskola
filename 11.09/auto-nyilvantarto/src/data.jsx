let AUTOK = [
  {
    rendszam: "FTH-123",
    evjarat: 1999,
    fogyasztas: 6.6,
  },
  {
    rendszam: "RAB-689",
    evjarat: 2020,
    fogyasztas: 5.3,
  },
  {
    rendszam: "PPE-772",
    evjarat: 2018,
    fogyasztas: 4.9,
  },
];

export function listaz() {
  return AUTOK;
}

export function felvesz(ujAuto){    
    // AUTOK.push(ujAuto);    -> ez nem lesz jó most nekünk
    if(AUTOK.find( a=> a.rendszam == ujAuto.rendszam))
      return;
    AUTOK = [...AUTOK, ujAuto];
}

export function torol(rendszam){
    AUTOK = AUTOK.filter( a => a.rendszam != rendszam);
}
