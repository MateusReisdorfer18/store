import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaFormComponent } from './caixa-form.component';

describe('CaixaFormComponent', () => {
  let component: CaixaFormComponent;
  let fixture: ComponentFixture<CaixaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaixaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaixaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
