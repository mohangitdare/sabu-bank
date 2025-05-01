import { Component, OnInit } from '@angular/core';
import { LoanProduct } from '../../../shared/models/loan-product';
import { LoanProductService } from '../../../admin/loan-product/loan-product.service';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from "../../../footer/footer.component";

declare var bootstrap: any; // Declare Bootstrap for modal functionality

@Component({
  selector: 'app-loan-product-view',
  standalone: true,
  imports: [CommonModule, AppFooterComponent],
  templateUrl: './loan-product-view.component.html',
  styleUrl: './loan-product-view.component.css',
})
export class LoanProductViewComponent implements OnInit {
  loanProducts: LoanProduct[] = [];
  selectedProduct: LoanProduct | null = null;
  viewDetailsModal: any; // To hold the modal instance

  constructor(private loanProductService: LoanProductService) {}

  ngOnInit(): void {
    this.loanProducts = this.loanProductService.getLoanProducts();
    this.viewDetailsModal = new bootstrap.Modal(document.getElementById('viewDetailsModal'));
  }

  openDetailsModal(product: LoanProduct): void {
    this.selectedProduct = product;
    this.viewDetailsModal.show();
  }

  closeDetailsModal(): void {
    this.selectedProduct = null;
    this.viewDetailsModal.hide();
  }
}