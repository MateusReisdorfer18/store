import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-produtos-pedido-form',
  templateUrl: './produtos-pedido-form.component.html',
  styleUrl: './produtos-pedido-form.component.css'
})
export class ProdutosPedidoFormComponent implements OnInit{
  @Output() onAdicionarProduto = new EventEmitter();
  
  produtos: IProduto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.produtoService.findAll().subscribe((produtos) => {
      this.produtos = produtos;
    })
  }

  adicionarProduto(produto: IProduto): void {
    this.onAdicionarProduto.emit(produto);
  }
}
