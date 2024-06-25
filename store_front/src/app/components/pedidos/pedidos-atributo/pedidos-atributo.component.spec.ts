import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAtributoComponent } from './pedidos-atributo.component';

describe('PedidosAtributoComponent', () => {
  let component: PedidosAtributoComponent;
  let fixture: ComponentFixture<PedidosAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidosAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
