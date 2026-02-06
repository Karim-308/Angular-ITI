import { Component, inject } from '@angular/core';
import { Product, PRODUCTS } from './products-data';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../services/productService';


@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products: Product[] = [];
  
  client = inject(ProductService);


 ngOnInit() { 
   this.client.getProducts().subscribe((data) => {
    this.products = (data as any).products;
  });
}

}
