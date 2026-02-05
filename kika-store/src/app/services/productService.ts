import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  client = inject(HttpClient);

  getProducts() {
    return this.client.get('https://dummyjson.com/products');
  }
  
  getProductById(id: number) {
    return this.client.get(`https://dummyjson.com/products/${id}`);
  }
}
