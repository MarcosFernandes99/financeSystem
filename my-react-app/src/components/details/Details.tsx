import { DadosType } from "../../types/dados.interface";
import "./style.scss"

interface DetailsProps {
    dados: DadosType[];
  }

export const Details = ({ dados }: DetailsProps) => {
    return (
        <section className="container">            
                <ul className="subContainer">
                    {dados.map((item, index) => (
                        <li className="card" key={index}>
                            <div className="navBar">
                                <span>Data:</span>
                                <span>Categoria:</span>
                                <span>Título:</span>
                                <span>Valor:</span>
                            </div>
                            <div className="dados">
                                <span>{item.data}</span>
                                <span>{item.categoria}</span>
                                <span>{item.titulo}</span>
                                <span>{item.valor}</span>
                            </div>
                        </li>
                    ))}
                </ul>
        </section>
    );
};
