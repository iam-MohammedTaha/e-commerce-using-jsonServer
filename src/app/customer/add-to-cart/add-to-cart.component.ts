import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BuyerDashboardComponent } from '../buyer/buyer-dashboard/buyer-dashboard.component';
import { CartService } from '../../shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CommonModule, BuyerDashboardComponent],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {

  cartService = inject(CartService);

  constructor(private router:Router){

  }

  order(){
    this.router.navigate(['/checkout']);
  }

  deleteCart(item:any){
    this.cartService.delete(item);
  }

}
