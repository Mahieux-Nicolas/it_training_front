import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetFormationComponent } from './projet-formation.component';

describe('ProjetFormationComponent', () => {
  let component: ProjetFormationComponent;
  let fixture: ComponentFixture<ProjetFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetFormationComponent]
    });
    fixture = TestBed.createComponent(ProjetFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
