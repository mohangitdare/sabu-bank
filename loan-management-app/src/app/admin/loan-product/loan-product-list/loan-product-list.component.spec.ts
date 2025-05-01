import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductListComponent } from './loan-product-list.component';

describe('LoanProductListComponent', () => {
  let component: LoanProductListComponent;
  let fixture: ComponentFixture<LoanProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
