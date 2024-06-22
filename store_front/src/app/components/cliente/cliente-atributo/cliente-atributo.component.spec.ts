import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAtributoComponent } from './cliente-atributo.component';

describe('ClienteAtributoComponent', () => {
  let component: ClienteAtributoComponent;
  let fixture: ComponentFixture<ClienteAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
