import React, {useState, createContext} from 'react';

export const MesasContext = createContext();

const MesasProvider = (props) =>{
    const [mesas, setMesas] = useState(1);
    const [clientes, setClientes] = useState([]);
    return(
        <MesasContext.Provider value={{mesas, setMesas, clientes, setClientes}}>
            {props.children}
        </MesasContext.Provider>
    )
} 
export default MesasProvider;