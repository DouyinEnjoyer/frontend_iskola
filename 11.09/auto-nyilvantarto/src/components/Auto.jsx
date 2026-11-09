
export default function Auto({rendszam, evjarat, fogyasztas, onTorles}){
    return (
        <div className="auto">
            <p>Rendszám: {rendszam}</p>
            <p>Évjárat: {evjarat}</p>
            <p>Fogyasztás: {fogyasztas} L</p>
            <button onClick={onTorles}>Törlés</button>
        </div>
    );
}