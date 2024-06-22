import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../interfaces/ICategoria';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrl: './categoria-detalhe.component.css'
})
export class CategoriaDetalheComponent implements OnInit{
  categoria!: ICategoria;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.categoriaService.getById(id).subscribe((categoria) => {
        this.categoria = categoria;
      })
    }
  }
}
