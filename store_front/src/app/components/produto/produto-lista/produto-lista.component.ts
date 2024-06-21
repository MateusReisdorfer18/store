import { Component } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})
export class ProdutoListaComponent {
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

  delete(id: String): void {
    this.produtoService.delete(id).subscribe(() => {
      this.loadAll();
    })
  }
}
