import { Component } from '@angular/core';
import { ICaixa } from '../../interfaces/ICaixa';
import { ActivatedRoute } from '@angular/router';
import { CaixaService } from '../../services/caixa/caixa.service';

@Component({
  selector: 'app-caixa-detalhe',
  templateUrl: './caixa-detalhe.component.html',
  styleUrl: './caixa-detalhe.component.css'
})
export class CaixaDetalheComponent {
  caixa?: ICaixa;

  constructor(
    private route: ActivatedRoute,
    private caixaService: CaixaService) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id'); 
    if(id) {
      this.caixaService.findById(id).subscribe((caixa) => {
        caixa.valorTotal = Number(caixa.valorTotal.toFixed(2));
        this.caixa = caixa;
      })
    }
  }
}
