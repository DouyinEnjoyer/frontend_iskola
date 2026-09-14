// az osztaly != objektum (maga a megalkotott példány az objektum)

class Szemely {
  constructor(nev, foglalkozas, szuletesiEv) {
    this.nev = nev;
    this.foglalkozas = foglalkozas;
    this.szuletesiEv = szuletesiEv;
  }
  hanyEves() {
    const datum = new Date();
    return datum.getFullYear() - this.szuletesiEv;
  }
}
// bela maga az objektum
const bela = new Szemely("bela", "tanulo", "1222");

console.log(bela);
console.log(`${bela.nev} ${bela.hanyEves()} éves idén`);

class Alkalmazott extends Szemely {
  static bonusz = 10;
  #azonosito = undefined;

  constructor(nev, foglalkozas, szuletesiEv, fizetes) {
    super(nev, foglalkozas, szuletesiEv);
    this.fizetes = fizetes;
  }

  get azonosito() {
    return this.#azonosito;
  }
  set azonosito(azon) {
    if (typeof azon == "number") {
      this.#azonosito = azon;
    }
  }
  /**
   * bónuszt csak decemberben kapnak az emberel
   * - ha december van, akkor a bonusszal emelt fizetes a fizetés
   * kölönben pedig normal fizetest kapjak
   */
  fizetesEbbenAHonapban() {
    if (new Date().getMonth() == 11)
      return this.fizetes * (1 + Alkalmazott.bonusz / 100);
    return this.fizetes;
  }
}

const irenke = new Alkalmazott("kovacs iren", "lovesz", 2000, 523999);
irenke.azonosito = 12324141;
console.log(irenke.azonosito);

console.log(irenke.fizetesEbbenAHonapban());

/**
 * készitsen egy kisfonok osztaly amely az alkalmazott osztalybol szarmazik
 * készitse el az osztalyhoz a konstruktort, illetve vegyen még fel plusszba egy tulajdonsagot is
 * hány beosztottja van a kisfőnöknek ez csak lekérdezhető legyen, beállitani, csak a konstruktorban lehet
 */

class Kisfonok extends Alkalmazott {
  #beosztottSzamai = 0;
  constructor(nev, foglalkozas, szuletesiEv, fizetes, beosztottSzam) {
    super(nev, foglalkozas, szuletesiEv, fizetes);
    if (beosztottSzam >= 0 && beosztottSzam <= 20)
      this.#beosztottSzamai = beosztottSzam;
  }
  get beosztottSzam() {
    return this.#beosztottSzamai;
  }
}
