import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaPedidosListaComponent } from './caixa-pedidos-lista.component';

describe('CaixaPedidosListaComponent', () => {
  let component: CaixaPedidosListaComponent;
  let fixture: ComponentFixture<CaixaPedidosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaixaPedidosListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixaPedidosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
