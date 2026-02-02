import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [NgClass],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users = [
    {
      id: 1,
      username: 'Ahmed Ali',
      email: 'ahmed@example.com',
      phone: '01012345678',
      birthdate: '1995-03-15',
      role: 'admin',
    },
    {
      id: 2,
      username: 'Sara Mohamed',
      email: 'sara@example.com',
      phone: '01198765432',
      birthdate: '1998-07-22',
      role: 'user',
 
    },
    {
      id: 3,
      username: 'Omar Hassan',
      email: 'omar@example.com',
      phone: '01234567890',
      birthdate: '1992-11-08',
      role: 'moderator',

    },
    {
      id: 4,
      username: 'Nour Ibrahim',
      email: 'nour@example.com',
      phone: '01567890123',
      birthdate: '2000-01-30',
      role: 'user',
  
    }
  ];
}
