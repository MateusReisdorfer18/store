import { Component } from '@angular/core';
import { ICaixa } from '../../interfaces/ICaixa';
import { CaixaService } from '../../services/caixa/caixa.service';

@Component({
  selector: 'app-caixa-lista',
  templateUrl: './caixa-lista.component.html',
  styleUrl: './caixa-lista.component.css'
})
export class CaixaListaComponent {
  caixas: ICaixa[] = [];

  constructor(private caixaService: CaixaService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.caixaService.getAll().subscribe((caixas) => {
      this.caixas = caixas;
    })
  }

  create(): void {
    this.caixaService.create().subscribe((caixa) => {
      console.log(caixa);
      this.loadAll();
    });
  }

  openCaixa(id: string): void {
    this.caixaService.openCaixa(id).subscribe(() => {
      this.loadAll();
    });
  }

  closeCaixa(id: string): void {
    this.caixaService.closeCaixa(id).subscribe(() => {
      this.loadAll();
    });
  }

  delete(id: string): void {
    this.caixaService.delete(id).subscribe(() => {
      this.loadAll();
    })
  }
}
