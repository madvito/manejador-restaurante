import React, {useState, useEffect, useContext} from 'react'
import { MesasContext } from '../context/MesasContext'

const Mesa = ({nombre, numero}) => {
    const [cliente, setCliente] = useState('');
    const [clienteEscritura, setClienteEscritura] = useState('');
    const {clientes, setClientes} = useContext(MesasContext);

    useEffect(()=>{
        setCliente(nombre)
    }, [nombre])

    const handleChangeName = (e) => {
        setClienteEscritura(e.target.value);
    }

    const handleModificar = (nom) => {
        setCliente(nom)
    }
    
    const handleEliminar = ()=>{
        let newClientes = clientes;
        newClientes[numero -1] = '';
        setClientes(newClientes);
        setCliente('');
    }
    return (
        <div>
            <h1>Mesa {numero}</h1>

            <h3>{cliente}</h3>
            {!cliente && <input onChange={handleChangeName} value={clienteEscritura} />}
            {!cliente && <button onClick={()=>handleModificar(clienteEscritura)}>agregar</button>}
            {cliente && <button onClick={handleEliminar}>eliminar</button>}
        </div>
    )
}

export default Mesa
