import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPedidoFormComponent } from './produtos-pedido-form.component';

describe('ProdutosPedidoFormComponent', () => {
  let component: ProdutosPedidoFormComponent;
  let fixture: ComponentFixture<ProdutosPedidoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutosPedidoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosPedidoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
