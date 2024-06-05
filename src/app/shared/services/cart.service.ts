import { Injectable } from '@angular/core';
import { Product } from '../../core/Model/object.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  constructor() { }

  addToCart(product: Product){
    this.items.push(product);

    localStorage.setItem('cartItems', JSON.stringify(this.items));
    
  }

  getItems(){
    return this.items;
  }

  delete(item: any){
    this.items = this.items.filter((i) => i.id !== item.id);

    localStorage.setItem('cartItems', JSON.stringify(this.items));
    
  }
}
