import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [AppFooterComponent],
  templateUrl: 'home.component.html',
  styleUrl:'home.component.css'
})
export class HomeComponent implements OnInit {
  

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  gotouserview(){
    this.router.navigate(["user/loan-product"])
  }
}