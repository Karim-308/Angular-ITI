import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  route = inject(ActivatedRoute);
  client = inject(ProductService)
  product: any = null;
  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.client.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }


}


/*

  products: Product[] = [];
  
  client = inject(ProductService);


 ngOnInit() { 
   this.client.getProducts().subscribe((data) => {
    this.products = (data as any).products;
  });
}*/