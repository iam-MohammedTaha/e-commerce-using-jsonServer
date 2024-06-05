import { Component, inject } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/Model/object.model';
import { BuyerDashboardComponent } from '../buyer-dashboard/buyer-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  payment = inject(CartService);
  

  constructor(private router:Router) {}

  confirmPayment(){
    alert("Confirm Payment");
  }

  canclePayment(item:any){
    this.payment.delete(item);
    this.router.navigate(['/buyer-dashboard']);
  }

}
