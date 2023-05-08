import { useState } from "react"
import "./style.scss"
import { DadosType } from "../../types/dados.interface"

export const InputArea = () => {

    const [dados, setDados] = useState<DadosType>({
       
            data: '',
            categoria: '',
            titulo: '',
            valor: 0,
        

    })

    console.log(dados)

    const handleInputChange = (event: any) => {
        setDados({
            ...dados,
            [event.target.name]: (event.target.value)
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setDados(dados)
    }


    return (
        <form onSubmit={handleSubmit} className='containerInput'>
            <div className="Data">
                <label htmlFor="Data">Data</label>
                <input type="date" name="data" id="Data" onChange={handleInputChange} />
            </div>

            <div className="Categoria">
                <label htmlFor="Categoria" >Categoria</label>
                <select name="categoria" id="categoria" onChange={handleInputChange}>
                    <option value="">Selecione uma opção</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
            </div>

            <div className="Titulo">
                <label htmlFor='Título' >Título</label>
                <input type="text" name="titulo" id="titulo" onChange={handleInputChange} />
            </div>

            <div className="Valor">
                <label htmlFor='Valor'>Valor</label>
                <input type="text" name="valor" id="valor" onChange={handleInputChange} />
            </div>

            <button type="submit">Adicionar</button>
        </form>
    )
}
