import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueFormationsComponent } from './catalogue-formations.component';

describe('CatalogueFormationsComponent', () => {
  let component: CatalogueFormationsComponent;
  let fixture: ComponentFixture<CatalogueFormationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogueFormationsComponent]
    });
    fixture = TestBed.createComponent(CatalogueFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
