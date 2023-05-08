import { SetStateAction, useState } from "react";
import { MeuContext } from "../context/MeuContext";
import { DadosType, MeuContextType } from "../types/dados.interface";
import { Details } from "../components/details/Details";


export const MeuProvider = () => {
    const [dados, setDados] = useState<DadosType>({
        data: '',
        categoria: '',
        titulo: '',
        valor: 0,
    });

    const contextValue: MeuContextType = {
        dados,
        setDados: (newDados: SetStateAction<DadosType>) => setDados(prevDados => ({ ...prevDados, ...newDados })),
    };

    return (
        <MeuContext.Provider value={contextValue}>
            <Details/>
        </MeuContext.Provider>
    )
}   
