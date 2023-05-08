import {createContext} from 'react'
import { MeuContextType } from '../types/dados.interface';

export const MeuContext = createContext<MeuContextType>({
    dados: {    
        data: '',
        categoria: '',
        titulo: '',
        valor: 0,
    },
    setDados: () => {}
});
