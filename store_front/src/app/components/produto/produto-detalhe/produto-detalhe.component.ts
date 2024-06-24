import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto/produto.service';
import { IProduto } from '../../interfaces/IProduto';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent implements OnInit{
  produto!: IProduto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id'); 
    if(id) {
      this.produtoService.findById(id).subscribe((produto) => {
        this.produto = produto;
      })
    }
  }
}
