import { useContext } from "react";
import AppContext from "./AppContext";

function Tela3() {

    const { setTela3, setHoras, setValor, setTela4,setTela2 } = useContext(AppContext);

    return (
        <div>
            <div>
                <div>Hora:</div>
                <input name="hora" onChange={e => setHoras(e.target.value)} />
            </div>
            <div>
                <div>Valor:</div>
                <input name="telefone" onChange={e => setValor(e.target.value)} />
            </div>
            <div></div>
            <button onClick={() => {
                setTela3(false); setTela2(true);
            }}>Voltar</button>
            <button onClick={() => {
                setTela3(false); setTela4(true);
            }}>Calcular</button>
        </div>
    )
}

export default Tela3;