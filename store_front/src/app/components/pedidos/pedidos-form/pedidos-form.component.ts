import { Component, OnInit } from '@angular/core';
import { IPedido } from '../../interfaces/IPedido';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos/pedidos.service';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ICliente } from '../../interfaces/ICliente';
import { ProdutoService } from '../../services/produto/produto.service';
import { IProduto } from '../../interfaces/IProduto';
import { CaixaService } from '../../services/caixa/caixa.service';
import { ICaixa } from '../../interfaces/ICaixa';
import { IService } from '../../interfaces/IService';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrl: './pedidos-form.component.css'
})
export class PedidosFormComponent implements OnInit {
  pedido: IPedido = {};
  clientes: ICliente[] = [];
  produtos: IProduto[] = [];
  produtosPedido: IProduto[] = [];
  caixas: ICaixa[] = [];
  caixa!: ICaixa

  isEdicao: boolean = false;

  constructor(
    private pedidoService: PedidosService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private caixaService: CaixaService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id && id != null) {
      this.isEdicao = true;
      this.pedidoService.findById(id).subscribe((pedido) => {
        this.pedido = pedido;
      })
    }
    
    this.popularListas(this.clienteService, this.clientes);
    this.popularListas(this.produtoService, this.produtos);
    this.popularListas(this.caixaService, this.caixas);
  }
  
  popularListas(service: IService, list: any[]): void {
    service.findAll().subscribe((listParams) => {
      listParams.forEach((item) => {
        list.push(item);
      })
    })
  }

  adicionarProduto(produto: IProduto): void {
    this.produtosPedido.push(produto);
    console.log(this.produtosPedido)
  }

  save(): void {
    this.pedido.produtos = this.produtosPedido;

    if(this.isEdicao && this.pedido.id) {
      this.pedidoService.alter(this.pedido, this.pedido.id).subscribe(() => {
        this.router.navigate(['/pedidos']);
      })

      return;
    }

    this.pedidoService.create(this.pedido, this.caixa.id).subscribe((pedido) => {
      this.router.navigate(['/pedidos']);
      console.log(pedido);
    })
  }
}
