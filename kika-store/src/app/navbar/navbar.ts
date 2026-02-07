import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  cartData = inject(CartService);

  cartItemCount = 0;

  ngOnInit() {
    this.cartData.data$.subscribe((data) => { 
      this.cartItemCount = data.length;
    });
  }
}
