import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Login } from './login/login';
import { Register } from './register/register';
import { Cart } from './cart/cart';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [

{path: "" , component : Products},
{path: "login" , component : Login},
{path: "register" , component : Register},
{path: "cart" , component : Cart},
{path: "**" , component : NotFound},




];
