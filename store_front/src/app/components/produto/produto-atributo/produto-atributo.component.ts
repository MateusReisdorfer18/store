import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-produto-atributo',
  templateUrl: './produto-atributo.component.html',
  styleUrl: './produto-atributo.component.css'
})
export class ProdutoAtributoComponent {
  @Input() produto!: IProduto
  @Output() onDelete = new EventEmitter();

  showOptions: boolean = false;

  openOptions(): void {
    this.showOptions = !this.showOptions;
  }

  delete(id: string): void {
    this.onDelete.emit(id);
  }
}
