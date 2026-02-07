import { Component, inject, Input } from '@angular/core';
import { Product } from '../products/products-data';
import { StockStatusPipe } from '../stock-status-pipe';
import { Router } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [StockStatusPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
 @Input() product!: Product;
 clientService = inject(CartService);

 addToCart() {
   this.clientService.addToCart(this.product);
    console.log('Button clicked!');
 }
 readonly router = inject(Router);

 goToDetail() {
  this.router.navigate(['/product', this.product.id]);
 }
}
