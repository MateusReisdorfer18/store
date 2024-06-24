import { ICliente } from "./ICliente";
import { IProduto } from "./IProduto";

export interface IPedido {
    id: string,
    cliente: ICliente,
    produtos: IProduto[],
    dataTransacao: Date,
    valor: number
}