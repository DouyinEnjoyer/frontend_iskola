import Auto from "./Auto";
import { torol, listaz } from "../data";

export default function Autok({autok, setAutok}){
    function handleTorles(rendszam){
        // 1.: az eredeti tömbből törlök
        torol(rendszam);
        // 2.: frissítem a state-et!
        setAutok(listaz());
    }

    return (
        autok.map( a => <Auto key={a.rendszam} {...a} onTorles={ () => handleTorles(a.rendszam) } /> ) 
    );
}