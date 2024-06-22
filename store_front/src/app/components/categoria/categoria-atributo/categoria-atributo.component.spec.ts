import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAtributoComponent } from './categoria-atributo.component';

describe('CategoriaAtributoComponent', () => {
  let component: CategoriaAtributoComponent;
  let fixture: ComponentFixture<CategoriaAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
