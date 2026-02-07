import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
cartData = inject(CartService);
data: any[] = [];
 ngOnInit() {
    this.cartData.data$.subscribe((data) => { 
        this.data = data;
        console.log(this.data);
    });
  }

  
}
