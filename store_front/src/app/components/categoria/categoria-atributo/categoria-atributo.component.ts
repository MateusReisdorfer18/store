import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategoria } from '../../interfaces/ICategoria';

@Component({
  selector: 'app-categoria-atributo',
  templateUrl: './categoria-atributo.component.html',
  styleUrl: './categoria-atributo.component.css'
})
export class CategoriaAtributoComponent {
  @Input() categoria!: ICategoria;
  @Output() onDelete = new EventEmitter();

  showOptions: boolean = false;

  openOptions(): void {
    this.showOptions = !this.showOptions;
  }

  delete(id: string): void {
    this.onDelete.emit(id);
  }
}
