import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAtributoComponent } from './produto-atributo.component';

describe('ProdutoAtributoComponent', () => {
  let component: ProdutoAtributoComponent;
  let fixture: ComponentFixture<ProdutoAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutoAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
