import { Component, Input, OnInit } from '@angular/core';
import { ICaixa } from '../../interfaces/ICaixa';

@Component({
  selector: 'app-caixa-pedidos-lista',
  templateUrl: './caixa-pedidos-lista.component.html',
  styleUrl: './caixa-pedidos-lista.component.css'
})
export class CaixaPedidosListaComponent implements OnInit{
  @Input() caixa?: ICaixa;

  ngOnInit(): void {
    console.log
  }
}
