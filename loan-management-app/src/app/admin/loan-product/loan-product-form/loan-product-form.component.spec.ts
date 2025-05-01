import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductFormComponent } from './loan-product-form.component';

describe('LoanProductFormComponent', () => {
  let component: LoanProductFormComponent;
  let fixture: ComponentFixture<LoanProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanProductFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
