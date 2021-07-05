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
            {/* {mesas} */}
            {mesas ===1 && renderMesas(1)}
            {mesas ===2 && renderMesas(2)}
            {mesas ===3 && renderMesas(3)}
            {/* <h2>{clientes}</h2> */}
        </div>
    )
}

export default MesasDisponibles
