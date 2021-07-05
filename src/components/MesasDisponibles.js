import React,{useState, useEffect, useContext} from 'react'
import { MesasContext } from '../context/MesasContext'
import Mesa from './Mesa';

const MesasDisponibles = () => {
    const {mesas, clientes, setClientes} = useContext(MesasContext);
    // const [clientes, setClientes] = useState([])

    useEffect(()=>{
        let clientesArr = [];
        for (let i = 0; i< mesas; i++) {
            clientesArr.push('');
        }
        setClientes(clientesArr);
    }, [mesas])



    const renderMesas = (num) => {
        let mesasArr = [];
        for (let i = 0; i< num; i++) {
            mesasArr.push('');
        }
        console.log(mesasArr);
        return mesasArr.map((mesa, i) => <Mesa key={i} nombre={clientes[i]} numero={i+1}/>)
    }
    return (
        <div>
            {renderMesas(mesas)}
        </div>
    )
}

export default MesasDisponibles
