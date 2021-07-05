import React from 'react';
import MesasProvider from '../context/MesasContext';
import Layout from './Layout';
import MesasDisponibles from './MesasDisponibles';


const Index = () => {
    return (
        <MesasProvider>
            <Layout>
                INDEX
                <MesasDisponibles />
            </Layout>
        </MesasProvider>
    )
}

export default Index
