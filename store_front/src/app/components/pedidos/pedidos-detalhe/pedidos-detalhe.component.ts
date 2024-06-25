import { Component } from '@angular/core';
import { IPedido } from '../../interfaces/IPedido';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from '../../services/pedidos/pedidos.service';

@Component({
  selector: 'app-pedidos-detalhe',
  templateUrl: './pedidos-detalhe.component.html',
  styleUrl: './pedidos-detalhe.component.css'
})
export class PedidosDetalheComponent {
  pedido!: IPedido;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidosService) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id'); 
    if(id) {
      this.pedidoService.findById(id).subscribe((pedido) => {
        this.pedido = pedido;
      })
    }
  }
}
