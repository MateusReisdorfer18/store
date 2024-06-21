import { Component, OnInit } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { ICategoria } from '../../interfaces/ICategoria';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { ProdutoService } from '../../services/produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent implements OnInit{
  produto: IProduto = {
    id: '',
    nome: '',
    preco: 0,
    quantidade: 0
  };
  isEdicao: boolean = false;
  categorias!: ICategoria[];

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id && id != null) {
      this.isEdicao = true;
      this.produtoService.findById(id).subscribe((produto) => {
        this.produto = produto;
      })
    }

    this.findAllCategorias();
  }

  findAllCategorias(): void {
    this.categoriaService.getAll().subscribe((categorias) => {
      this.categorias = categorias;
    })
  }

  save(): void {
    if(this.isEdicao) {
      this.produtoService.alter(this.produto, this.produto.id).subscribe(() => {
        this.router.navigate(['/produtos']);
      })

      return;
    }
    
    this.produtoService.create(this.produto).subscribe(() => {
      this.findCategoria();
      this.router.navigate(['/produtos']);
    })
  }

  private findCategoria(): void {
    this.categorias.forEach((categoria) => {
      if(this.produto.categoria?.nome === categoria.nome) 
        this.produto.categoria = categoria;
    })
  }
}
