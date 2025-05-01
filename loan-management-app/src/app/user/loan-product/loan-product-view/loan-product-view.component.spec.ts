import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductViewComponent } from './loan-product-view.component';

describe('LoanProductViewComponent', () => {
  let component: LoanProductViewComponent;
  let fixture: ComponentFixture<LoanProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanProductViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
