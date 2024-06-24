import { Component } from '@angular/core';
import { ICaixa } from '../../interfaces/ICaixa';
import { CaixaService } from '../../services/caixa/caixa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-caixa-form',
  templateUrl: './caixa-form.component.html',
  styleUrl: './caixa-form.component.css'
})
export class CaixaFormComponent {
  caixa: ICaixa = {
    id: '',
    numero: 0,
    valor: 0,
    status: false
  };
  isEdicao: boolean = false;

  constructor(
    private caixaService: CaixaService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id && id != null) {
      this.isEdicao = true;
      this.caixaService.getById(id).subscribe((caixa) => {
        this.caixa = caixa;
      })
    }
  }

  save(): void {
    if(this.isEdicao) {
      this.caixaService.alter(this.caixa, this.caixa.id).subscribe(() => {
        this.router.navigate(['/caixas']);
      })

      return;
    }
    
    // this.caixaService.create(this.caixa).subscribe(() => {
    //   this.router.navigate(['/caixas']);
    // })
  }
}
