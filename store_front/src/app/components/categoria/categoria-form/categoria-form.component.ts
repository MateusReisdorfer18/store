import { Component, OnInit } from '@angular/core';
import { ICategoria } from '../../interfaces/ICategoria';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export class CategoriaFormComponent implements OnInit{
  categoria: ICategoria = {
    id: '',
    nome: '',
    qualidade: ''
  };

  isEdicao: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.isEdicao = true;
      this.categoriaService.getById(id).subscribe((categoria) => {
        this.categoria = categoria;
      })
    }
  }

  save(): void {
    if(this.isEdicao) {
      this.categoriaService.update(this.categoria, this.categoria.id).subscribe(() => {
        this.router.navigate(["/categorias"]);
      })
      
      return;
    }

    this.categoriaService.create(this.categoria).subscribe(() => {
      this.router.navigate(["/categorias"])
    })
  }
}
