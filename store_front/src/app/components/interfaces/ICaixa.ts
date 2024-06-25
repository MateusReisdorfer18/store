import { IPedido } from "./IPedido";

export interface ICaixa {
    id: string,
    numero: number,
    status: boolean,
    pedidos?:IPedido[],
    dataFechamento?: Date,
    valorTotal: number
}