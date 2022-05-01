import { useContext } from "react";
import AppContext from "./AppContext";

function Tela1(){

    const {setTela1, setTela2} = useContext(AppContext);

    return (
        <div>
            <button onClick={ () => {
                 setTela1(false); setTela2(true); 
                 }}>Iniciar</button>
        </div>
    )
}

export default Tela1;