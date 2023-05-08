export interface DadosType {
    data: string
    categoria: string
    titulo: string
    valor: number
}

export interface MeuContextType {
    dados: DadosType
    setDados: React.Dispatch<React.SetStateAction<DadosType>>
}