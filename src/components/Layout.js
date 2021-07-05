import React from 'react';
import NavBar from './NavBar';

// DESTRUCTURING

// const a = {casa: 1, perro: 2}

// const casa = a.casa;
// const {casa, perro} = a;

// console.log(casa, perro);
// const Layout = (props) => {
//     const titulo = `HOLA ${props.titulo}`;
//     return (
//         <div>
//             <div>COSA 1</div>
//             <div>{titulo}</div>
//             <div>COSA 3</div>
//         </div>
//     )
// }
const Layout = ({children}) => {
    // const title = `HOLA ${titulo}`;
    return (
        <div>
            <NavBar/>
            <div>{children}</div>
        </div>
    )
}

export default Layout
