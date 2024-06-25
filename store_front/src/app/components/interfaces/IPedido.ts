import { ICaixa } from "./ICaixa";
import { ICliente } from "./ICliente";
import { IProduto } from "./IProduto";

export interface IPedido {
    id?: string,
    numero?: number,
    cliente?: ICliente,
    produtos?: IProduto[],
    dataTransacao?: Date,
    valorTotal?: number,
    caixa?: ICaixa
}