import { UserService } from './user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  loadUsers() {
    this.users = this.userService.getAllUsers();
  }
  ngOnInit() {
    this.loadUsers();
  }
  ionViewWillEnter() {
    this.loadUsers();
  }
}
