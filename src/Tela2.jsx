import { useContext } from "react";
import AppContext from "./AppContext";

function Tela2() {

    const { setTela2, setNome, setTelefone, setTela3 } = useContext(AppContext);

    return (
        <div>
            <div>
                <div>Nome:</div>
                <input name="nome" onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <div>Telefone:</div>
                <input name="telefone" onChange={e => setTelefone(e.target.value)} />
            </div>
            <div></div>
            <button onClick={() => {
                setTela2(false); setTela3(true);
            }}>Proximo</button>
        </div>
    )
}

export default Tela2;