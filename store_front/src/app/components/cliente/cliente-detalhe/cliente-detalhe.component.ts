import { Component, OnInit } from '@angular/core';
import { ICliente } from '../../interfaces/ICliente';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrl: './cliente-detalhe.component.css'
})
export class ClienteDetalheComponent implements OnInit{
  cliente!: ICliente;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.clienteService.findById(id).subscribe((cliente) => {
        this.cliente = cliente;
      })
    }
  }
}
