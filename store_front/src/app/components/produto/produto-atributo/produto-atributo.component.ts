import { Component, Input } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';

@Component({
  selector: 'app-produto-atributo',
  templateUrl: './produto-atributo.component.html',
  styleUrl: './produto-atributo.component.css'
})
export class ProdutoAtributoComponent {
  @Input() produto!: IProduto;

  showOptions: boolean = false;

  openOptions(): void {
    this.showOptions = !this.showOptions;
  }
}
