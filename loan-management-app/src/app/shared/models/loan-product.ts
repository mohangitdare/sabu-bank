export interface LoanProduct {
  loanProductId: number;
  productName: string;
  interestRate: number;
  minAmount: number;
  maxAmount: number;
  tenure: number;
  termsAndConditions: string;
  loanType?: string; // Optional field for loan type
  processingFee?: number; // Optional field for processing fee
  latePaymentPenalty?: string; // Optional field for late payment penalty description
  prepaymentOptions?: string; // Optional field for prepayment options
}