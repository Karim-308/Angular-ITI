import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  submitted = false;

  submitLogin(formData: { email: string; password: string }) {
    this.submitted = true;
    console.log('Login submitted:', formData);
  }
  
}
