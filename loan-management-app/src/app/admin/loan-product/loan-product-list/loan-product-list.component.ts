import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanProduct } from '../../../shared/models/loan-product';
import { LoanProductService } from '../loan-product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-loan-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loan-product-list.component.html',
  styleUrl: './loan-product-list.component.css',
})
export class LoanProductListComponent implements OnInit {
  loanProducts: LoanProduct[] = [];
  newLoanProduct: LoanProduct = {
    loanProductId: 0,
    productName: '',
    interestRate: 0,
    minAmount: 0,
    maxAmount: 0,
    tenure: 0,
    termsAndConditions: '',
    loanType: '',
    processingFee: 0,
    latePaymentPenalty: '',
    prepaymentOptions: '',
  };

  @ViewChild('loanForm') loanForm!: NgForm;
  addLoanModal: any; // To hold the modal instance

  constructor(
    private loanProductService: LoanProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loanProducts = this.loanProductService.getLoanProducts();
    this.addLoanModal = new bootstrap.Modal(document.getElementById('addLoanModal'));
  }

  closeAndResetModal() {
    this.addLoanModal.hide();
    this.resetNewLoanProduct();
  }

  editLoanProduct(id: number): void {
    this.router.navigate(['/admin/loan-product/form', id]);
  }

  addLoanProduct(): void {
    if (this.loanForm.valid) {
      this.loanProductService.addLoanProduct(this.newLoanProduct);
      this.loanProducts = this.loanProductService.getLoanProducts();
      this.addLoanModal.hide(); // Close the modal after saving
      this.resetNewLoanProduct();
    }
  }

  resetNewLoanProduct(): void {
    this.newLoanProduct = {
      loanProductId: 0,
      productName: '',
      interestRate: 0,
      minAmount: 0,
      maxAmount: 0,
      tenure: 0,
      termsAndConditions: '',
      loanType: '',
      processingFee: 0,
      latePaymentPenalty: '',
      prepaymentOptions: '',
    };
    if (this.loanForm) {
      this.loanForm.resetForm();
    }
  }

  openAddLoanModal(): void {
    console.log('Add Loan Modal button clicked');
    this.resetNewLoanProduct();
    this.addLoanModal.show(); // Open the modal
  }
}