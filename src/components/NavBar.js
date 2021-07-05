import React, {useContext} from 'react';
import { MesasContext } from '../context/MesasContext';



const NavBar = () => {
    const {setMesas} = useContext(MesasContext);

    const cambiaMesa = (num) => {
        setMesas(num)
    }
    return (
        <div>
            <ul styles={{display: 'flex', flexDirection: 'row'}}>
                <li onClick={()=>cambiaMesa(1)}>1 Mesa</li>
                <li onClick={()=>cambiaMesa(2)}>2 Mesas</li>
                <li onClick={()=>cambiaMesa(3)}>3 Mesas</li>
            </ul>
        </div>
    )
}

export default NavBar
