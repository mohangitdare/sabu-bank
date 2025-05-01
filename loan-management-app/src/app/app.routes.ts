import { Routes } from '@angular/router';
import { LoanProductListComponent } from './admin/loan-product/loan-product-list/loan-product-list.component';
import { LoanProductFormComponent } from './admin/loan-product/loan-product-form/loan-product-form.component';
import { LoanProductViewComponent } from './user/loan-product/loan-product-view/loan-product-view.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'admin/loan-product', component: LoanProductListComponent },
  { path: 'admin/loan-product/form', component: LoanProductFormComponent },
  { path: 'admin/loan-product/form/:id', component: LoanProductFormComponent },
  { path: 'user/loan-product', component: LoanProductViewComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];