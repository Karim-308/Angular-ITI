import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
 private cartItems : BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public data$ = this.cartItems.asObservable();

  addToCart(product: any) {
    const existingItem = this.cartItems.value.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.value.push({ product, quantity: 1 });
    }
    this.cartItems.next(this.cartItems.value);
    console.log('Cart items:', this.cartItems.value);


  }

  removeFromCart(product: any) {
    const index = this.cartItems.value.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      const updatedItems = this.cartItems.value.filter((item) => item.product.id !== product.id );
      this.cartItems.next(updatedItems);
    }
  }

  updateQuantity(product: any, quantity: number) {
    const item = this.cartItems.value.find((item) => item.product.id === product.id);
    if (item) {
      const updatedItems = this.cartItems.value.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity };
        }
        return item;
      });
      this.cartItems.next(updatedItems);
    }
  }

  getTotal() {
    return this.cartItems.value.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

}
