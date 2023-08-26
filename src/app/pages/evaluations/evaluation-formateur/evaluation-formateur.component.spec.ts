import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationFormateurComponent } from './evaluation-formateur.component';

describe('EvaluationFormateurComponent', () => {
  let component: EvaluationFormateurComponent;
  let fixture: ComponentFixture<EvaluationFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationFormateurComponent]
    });
    fixture = TestBed.createComponent(EvaluationFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
