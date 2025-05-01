import { Injectable } from '@angular/core';
import { LoanProduct } from '../../shared/models/loan-product';

@Injectable({
  providedIn: 'root',
})
export class LoanProductService {
  private loanProducts: LoanProduct[] = [
    {
      loanProductId: 1,
      productName: 'Personal Loan',
      interestRate: 10,
      minAmount: 1000,
      maxAmount: 50000,
      tenure: 24,
      termsAndConditions: 'Standard personal loan terms...',
    },
    {
      loanProductId: 2,
      productName: 'Home Loan',
      interestRate: 6,
      minAmount: 50000,
      maxAmount: 500000,
      tenure: 120,
      termsAndConditions: 'Home loan terms and conditions...',
    },
    {
      loanProductId: 3,
      productName: 'Vehicle Loan',
      interestRate: 6,
      minAmount: 50000,
      maxAmount: 500000,
      tenure: 120,
      termsAndConditions: 'Vehicle loan terms and conditions...',
    },
  ];

  getLoanProducts(): LoanProduct[] {
    return this.loanProducts;
  }

  addLoanProduct(loanProduct: LoanProduct): void {
    loanProduct.loanProductId = this.generateId();
    this.loanProducts.push(loanProduct);
  }

  updateLoanProduct(updatedProduct: LoanProduct): void {
    const index = this.loanProducts.findIndex(
      (product) => product.loanProductId === updatedProduct.loanProductId
    );
    if (index !== -1) {
      this.loanProducts[index] = updatedProduct;
    }
  }

  getLoanProductDetails(loanProductId: number): LoanProduct | undefined {
    return this.loanProducts.find(
      (product) => product.loanProductId === loanProductId
    );
  }

  private generateId(): number {
    if (this.loanProducts.length === 0) {
      return 1;
    }
    return Math.max(...this.loanProducts.map((product) => product.loanProductId)) + 1;
    
  }
}