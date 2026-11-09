import { useState } from "react";
import "./App.css";

import Autok from "./components/Autok";
import UjAuto from "./components/UjAuto";
import { listaz } from "./data";

function App() {
  const [autok, setAutok] = useState(listaz());

  return (
    <>
      <header>
        <h1>Autó nyilvántartó</h1>
      </header>
      <main>
        <section style={{width: "60%"}}>
          <h2>Autók listája</h2>
          <div id="autok">
            <Autok autok={autok} setAutok={setAutok} />
          </div>
        </section>

        <section id="uj-autok">
          <h2>Új autó felvétele</h2>
          <UjAuto autok={autok} setAutok={setAutok} />
        </section>
      </main>
    </>
  );
}

export default App;
