import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscrtiptionFormationComponent } from './form-inscrtiption-formation.component';

describe('FormInscrtiptionFormationComponent', () => {
  let component: FormInscrtiptionFormationComponent;
  let fixture: ComponentFixture<FormInscrtiptionFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInscrtiptionFormationComponent]
    });
    fixture = TestBed.createComponent(FormInscrtiptionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
