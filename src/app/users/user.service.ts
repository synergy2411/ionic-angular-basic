import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: '1',
      firstName: 'Bill',
      lastName: 'Gates',
      image: 'assets/images/bill.jpg',
      company: 'Microsoft',
      role: 'Admin',
    },
    {
      id: '2',
      firstName: 'Steve',
      lastName: 'Jobs',
      image: 'assets/images/steve.jpg',
      company: 'Apple',
      role: 'Admin',
    },
  ];
  constructor() {}

  getAllUsers() {
    return [...this.users];
  }

  getUser(userId: string) {
    return { ...this.users.find((user) => user.id === userId) };
  }
  deleteUser(userId: string) {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
