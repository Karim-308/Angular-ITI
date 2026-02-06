import { Component, Input } from '@angular/core';
import { Product } from '../products/products-data';
import { StockStatusPipe } from '../stock-status-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [StockStatusPipe, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
 @Input() product!: Product;
}
