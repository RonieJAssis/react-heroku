import { useState } from "react";
import AppContext from "./AppContext";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2";
import Tela3 from "./Tela3";
import Tela4 from "./Tela4";

function App() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [horas, setHoras] = useState(0);
  const [valor, setValor] = useState(0);
  const [tela1, setTela1] = useState(true);
  const [tela2, setTela2] = useState(false);
  const [tela3, setTela3] = useState(false);
  const [tela4, setTela4] = useState(false);

  
  const calcBruto = () => {
    return horas * valor
  }

  const calcAliquota = () => {
    const total =  calcBruto()
    if(total<=1212){
      return total * 0.075
    }
    else if(total<=2427.35){
      return total * 0.09
    }
    else if(total<=3641.03){
      return total * 0.12
    }else{
      return total * 0.14
    }
  }

  return (
    <AppContext.Provider value={ {nome,telefone,horas,valor,setNome,setTelefone,setHoras,setValor,setTela1,setTela2,setTela3,setTela4,calcAliquota,calcBruto} }>
      <div>
        {
          tela1 &&
          <Tela1/>
        }
        {
          tela2 &&
          <Tela2/>
        }
        {
          tela3 &&
          <Tela3/>
        }
        {
          tela4 &&
          <Tela4/>
        }
      </div>
    </AppContext.Provider>
  );
}

export default App;