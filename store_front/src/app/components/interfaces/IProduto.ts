import { ICategoria } from "./ICategoria";

export interface IProduto {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
    categoria?: ICategoria
}