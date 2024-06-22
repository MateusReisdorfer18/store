import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICliente } from '../../interfaces/ICliente';

@Component({
  selector: 'app-cliente-atributo',
  templateUrl: './cliente-atributo.component.html',
  styleUrl: './cliente-atributo.component.css'
})
export class ClienteAtributoComponent {
  @Input() cliente!: ICliente
  @Output() onDelete = new EventEmitter();

  showOptions: boolean = false;

  openOptions(): void {
    this.showOptions = !this.showOptions;
  }

  delete(id: string): void {
    this.onDelete.emit(id);
  }
}
