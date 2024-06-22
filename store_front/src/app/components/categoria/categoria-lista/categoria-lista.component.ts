import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../interfaces/ICategoria';
import { CategoriaService } from '../../services/categoria/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.css'
})
export class CategoriaListaComponent implements OnInit{
  categorias: ICategoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.categoriaService.getAll().subscribe((categorias) => {
      this.categorias = categorias;
    })
  }
}
