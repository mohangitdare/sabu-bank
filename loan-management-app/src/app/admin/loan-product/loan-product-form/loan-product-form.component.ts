import { Component, OnInit } from '@angular/core';
import { LoanProduct } from '../../../shared/models/loan-product';
import { LoanProductService } from '../loan-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-product-form.component.html',
  styleUrl: './loan-product-form.component.css',
})
export class LoanProductFormComponent implements OnInit {
  loanProduct: LoanProduct = {
    loanProductId: 0,
    productName: '',
    interestRate: 0,
    minAmount: 0,
    maxAmount: 0,
    tenure: 0,
    termsAndConditions: '',
    loanType: '', // Initialize new fields
    processingFee: 0,
    latePaymentPenalty: '',
    prepaymentOptions: '',
  };

  originalLoanProduct: LoanProduct = { ...this.loanProduct }; // Store a copy for comparison

  constructor(
    private loanProductService: LoanProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const existingProduct = this.loanProductService.getLoanProductDetails(id);
      if (existingProduct) {
        this.loanProduct = { ...existingProduct };
      } else {
        // Handle case where product with given ID is not found
        console.warn(`Loan product with ID ${id} not found.`);
        this.router.navigate(['/admin/loan-product']);
        return;
      }
      this.originalLoanProduct = { ...this.loanProduct };
    } else {
      this.originalLoanProduct = { ...this.loanProduct };
    }
  }

  saveLoanProduct(): void {
    if (this.loanProduct.loanProductId) {
      this.loanProductService.updateLoanProduct(this.loanProduct);
    } else {
      this.loanProductService.addLoanProduct(this.loanProduct);
    }
    this.router.navigate(['/admin/loan-product']);
  }

  returnback(): void {
    this.router.navigate(['/admin/loan-product']);
  }
}