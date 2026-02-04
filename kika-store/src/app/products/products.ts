import { Component } from '@angular/core';
import { PRODUCTS } from './products-data';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = PRODUCTS;
}
