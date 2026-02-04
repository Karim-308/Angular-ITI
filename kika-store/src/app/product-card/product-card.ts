import { Component, Input } from '@angular/core';
import { Product } from '../products/products-data';
import { StockStatusPipe } from '../stock-status-pipe';

@Component({
  selector: 'app-product-card',
  imports: [StockStatusPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
 @Input() product!: Product;
}
