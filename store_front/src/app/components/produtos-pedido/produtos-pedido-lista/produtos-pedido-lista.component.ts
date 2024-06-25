import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { IPedido } from '../../interfaces/IPedido';

@Component({
  selector: 'app-produtos-pedido-lista',
  templateUrl: './produtos-pedido-lista.component.html',
  styleUrl: './produtos-pedido-lista.component.css'
})
export class ProdutosPedidoListaComponent implements OnInit{
  @Input() pedido?: IPedido;

  ngOnInit(): void {
    
  }
}
