import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Product } from '../../../core/Model/object.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-buyer-dashboad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './buyer-dashboard.component.html',
  styleUrl: './buyer-dashboard.component.css'
})
export class BuyerDashboardComponent implements OnInit{
  all_products:any;

  cartService = inject(CartService);

  constructor(private router:Router, private customerService:CustomerService){}

  ngOnInit(): void {
 this.getAllProduct()
  }
  getAllProduct(){
    this.customerService.allProduct().subscribe(data=>{
      this.all_products = data;
      console.log(this.all_products)
    },error=>{
      console.log("My error", error)
    })
  }

  buyProduct(product: Product){
    this.router.navigateByUrl('/checkout');
    this.cartService.addToCart(product);
  }
  addToCart(product : Product){
    this.router.navigateByUrl('\addtocart');
    this.cartService.addToCart(product);
  }
}