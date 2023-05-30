import { DadosType } from "../../types/dados.interface";

interface DetailsProps {
    dados: DadosType[];
  }

export const Details = ({ dados }: DetailsProps) => {
    return (
        <section>
            <div>
                <ul>
                    {dados.map((item, index) => (
                        <li key={index}>
                            <p>Data: {item.data}</p>
                            <p>Categoria: {item.categoria}</p>
                            <p>Título: {item.titulo}</p>
                            <p>Valor: {item.valor}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
