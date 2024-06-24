import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaAtributoComponent } from './caixa-atributo.component';

describe('CaixaAtributoComponent', () => {
  let component: CaixaAtributoComponent;
  let fixture: ComponentFixture<CaixaAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaixaAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixaAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
