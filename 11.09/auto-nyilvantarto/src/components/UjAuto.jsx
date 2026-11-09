import { useState } from "react";
import { felvesz, listaz } from "../data";

export default function UjAuto({ autok, setAutok }) {
  //const [rendszam, setRendszam] = useState("")
  //const [evjarat, setEvjarat] = useState(2026)
  //const [fogyasztas,setFogyasztas] = useState(5.0)

  const [inputAuto, setInputAuto] = useState({
    rendszam: "",
    evjarat: 2026,
    fogyasztas: 5.0,
  });

  function onSave() {
    felvesz(inputAuto);

    setAutok(listaz());
    // console.log(autok);
  }
  function rendszamChange(event) {
    //  setRendszam(event.target.value);
    setRendszam(input);
  }
  function evjaratChange(event) {
    //  setEvjarat(event.target.value);
  }
  function fogyasztasChange(event) {
    //  setFogyasztas(event.target.value);
  }
  function inputsChange(inputTarget, inputValue) {
    //console.log(`target: ${inputTarget}, value: ${inputValue}`);
    setInputAuto(prevInput=>{
      return  {
        ...prevInput,
        //rendszam:prevInput.rendszam,
        //evjarat:prevInput.evjarat,
        //fogyasztas:prevInput.fogyasztas,
        [inputTarget]: inputValue
      }
    })
  }

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>Rendszám:</td>
            <td>
              <input
                type="text"
                id="input-rendszam"
                value={inputAuto.rendszam}
                onChange={(event) =>
                  inputsChange("rendszam", event.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td>Évjárat:</td>
            <td>
              <input
                type="number"
                id="input-evjarat"
                min="1900"
                value={inputAuto.evjarat}
                onChange={(event) =>
                  inputsChange("evjarat", event.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td>Fogyasztás:</td>
            <td>
              <input
                type="number"
                id="input-fogyasztas"
                step="0.1"
                min="0.1"
                value={inputAuto.fogyasztas}
                onChange={(event) =>
                  inputsChange("fogyasztas", event.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="button" onClick={onSave}>
                Mentés
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
