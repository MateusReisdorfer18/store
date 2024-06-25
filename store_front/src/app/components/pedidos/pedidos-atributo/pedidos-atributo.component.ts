import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPedido } from '../../interfaces/IPedido';

@Component({
  selector: 'app-pedidos-atributo',
  templateUrl: './pedidos-atributo.component.html',
  styleUrl: './pedidos-atributo.component.css'
})
export class PedidosAtributoComponent {
  @Input() pedido!: IPedido;
  @Output() onDelete = new EventEmitter();

  showOptions: boolean = false;

  openOptions(): void {
    this.showOptions = !this.showOptions;
  }

  delete(id: string): void {
    this.onDelete.emit(id);
  }
}
