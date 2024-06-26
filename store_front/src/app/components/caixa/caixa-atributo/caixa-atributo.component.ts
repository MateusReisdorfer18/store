import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICaixa } from '../../interfaces/ICaixa';

@Component({
  selector: 'app-caixa-atributo',
  templateUrl: './caixa-atributo.component.html',
  styleUrl: './caixa-atributo.component.css'
})
export class CaixaAtributoComponent implements OnInit{
  @Input() caixa!: ICaixa
  @Output() onDelete = new EventEmitter();
  @Output() onOpenCaixa = new EventEmitter();
  @Output() onCloseCaixa = new EventEmitter();

  showOptions: boolean = false;

  ngOnInit(): void {
    this.caixa.valorTotal = Number(this.caixa.valorTotal.toFixed(2));
  }

  openOptions(): void {
    this.showOptions = !this.showOptions;
  }

  delete(id: string): void {
    this.onDelete.emit(id);
  }

  openCaixa(id: string): void {
    this.onOpenCaixa.emit(id);
  }

  closeCaixa(id: string): void {
    this.onCloseCaixa.emit(id);
  }
}
