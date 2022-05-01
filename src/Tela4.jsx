import { useContext } from "react";
import AppContext from "./AppContext";

function Tela4() {

    const { setTela1, setTela4,nome,telefone,horas,valor,calcAliquota,calcBruto } = useContext(AppContext);

    return (
        <div>
            <div>
                <h2>Nome : {nome}</h2>
                <br/>
                <h2>Telefone : {telefone}</h2>
                <br/>
                <h2>Horas trabalhadas : {horas}</h2>
                <br/>
                <h2>Valor Hora: R${parseFloat(valor).toFixed(2)}</h2>
                <br/>
                <h2>Valor Bruto: R${calcBruto().toFixed(2)}</h2>
                <br/>
                <h2>Alíquota : R${calcAliquota().toFixed(2)}</h2>
                <br/>
                <h2>Valor Liquido : R${(calcBruto() - calcAliquota()).toFixed(2)}</h2>
                <br/>
            </div>
            <button onClick={() => {
                setTela4(false); setTela1(true);
            }}>Reiniciar</button>
        </div>
    )
}

export default Tela4;