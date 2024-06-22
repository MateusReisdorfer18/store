import { Component } from '@angular/core';
import { ICliente } from '../../interfaces/ICliente';
import { ClienteService } from '../../services/cliente/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.css'
})
export class ClienteListaComponent {
  clientes: ICliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.clienteService.findAll().subscribe((clientes) => {
      this.clientes = clientes;
    })
  }

  delete(id: string): void {
    this.clienteService.delete(id).subscribe(() => {
      this.loadAll();
    })
  }
}
