import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}
 
  gotouserview(){
    this.router.navigate(["/user/loan-product"]);
  }
  gotoadminview(){
    this.router.navigate(["/admin/loan-product"]);
  }
  gotoHome(){
    this.router.navigate(["/home"]);
  }
}
 