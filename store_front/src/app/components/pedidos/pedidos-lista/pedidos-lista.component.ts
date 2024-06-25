import { Component } from '@angular/core';
import { IPedido } from '../../interfaces/IPedido';
import { PedidosService } from '../../services/pedidos/pedidos.service';

@Component({
  selector: 'app-pedidos-lista',
  templateUrl: './pedidos-lista.component.html',
  styleUrl: './pedidos-lista.component.css'
})
export class PedidosListaComponent {
  pedidos: IPedido[] = [];

  constructor(private pedidoService: PedidosService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.pedidoService.findAll().subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

  delete(id: string): void {
    this.pedidoService.delete(id).subscribe(() => {
      this.loadAll();
    })
  }
}
