import { Component, OnInit } from '@angular/core';
import { ICliente } from '../../interfaces/ICliente';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent implements OnInit{
  cliente: ICliente = {
    id: '',
    nome: '',
    idade: 0
  };
  isEdicao: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.isEdicao = true;
      this.clienteService.findById(id).subscribe(cliente => {
        this.cliente = cliente;
      })
    }
  }

  save(): void {
    if(this.isEdicao) {
      this.clienteService.alter(this.cliente, this.cliente.id).subscribe(() => {
        this.router.navigate(['/clientes']);
      })
    }

    this.clienteService.create(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes'])
    })
  }
}
