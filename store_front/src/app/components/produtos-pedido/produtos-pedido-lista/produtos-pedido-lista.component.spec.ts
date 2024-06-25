import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPedidoListaComponent } from './produtos-pedido-lista.component';

describe('ProdutosPedidoListaComponent', () => {
  let component: ProdutosPedidoListaComponent;
  let fixture: ComponentFixture<ProdutosPedidoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutosPedidoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosPedidoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
