import React, { useContext } from 'react'
import { MeuContext } from '../../context/MeuContext';

export const Details = () => {

    const { dados } = useContext(MeuContext);
    
    return (
        <section>
            <div>
                AAAAAAAAAAAA
                {dados.data && <p>Data: {dados.data}</p>}
                {dados.categoria && <p>Categoria: {dados.categoria}</p>}
                {dados.titulo && <p>Título: {dados.titulo}</p>}
                {dados.valor && <p>Valor: {dados.valor}</p>}
            </div>

        </section>
    )
}
