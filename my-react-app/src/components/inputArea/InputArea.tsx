import { useState } from "react"
import "./style.scss"
import { DadosType } from "../../types/dados.interface"

export const InputArea = ({ onAdd }: { onAdd: (data: DadosType) => void }) => {


    const [inputValues, setInputValues] = useState<DadosType>({
        data: "",
        categoria: "",
        titulo: "",
        valor: 0,
    });

    console.log(inputValues)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(inputValues);

        
        setInputValues({
            data: "",
            categoria: "",
            titulo: "",
            valor: 0,
        });

    };


    return (
        <form onSubmit={handleSubmit} className='containerInput'>
            <div className="Data">
                <label htmlFor="Data">Data</label>
                <input type="date" name="data" id="Data" value={inputValues.data} onChange={handleInputChange} />
            </div>

            <div className="Categoria">
                <label htmlFor="Categoria" >Categoria</label>
                <select name="categoria" id="categoria" value={inputValues.categoria} onChange={handleInputChange}>
                    <option value="">Selecione uma opção</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
            </div>

            <div className="Titulo">
                <label htmlFor='Título' >Título</label>
                <input type="text" name="titulo" id="titulo" value={inputValues.titulo} onChange={handleInputChange} />
            </div>

            <div className="Valor">
                <label htmlFor='Valor'>Valor</label>
                <input type="text" name="valor" id="valor" value={inputValues.valor} onChange={handleInputChange} />
            </div>

            <button type="submit">Adicionar</button>
        </form>
    )
}
