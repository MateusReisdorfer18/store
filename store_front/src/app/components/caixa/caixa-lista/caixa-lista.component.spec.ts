import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaListaComponent } from './caixa-lista.component';

describe('CaixaListaComponent', () => {
  let component: CaixaListaComponent;
  let fixture: ComponentFixture<CaixaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaixaListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
