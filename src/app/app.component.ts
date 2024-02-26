import { Component } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { User } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `
    <section class="header">
      <button (click)="addUser()">Add User</button>
    </section>
    <app-user-list [users]="users" />
  `,
})
export class AppComponent {
  users: User[] = [
    { id: 1, name: 'Keval', lastName: 'Patel', username: 'Patel.Keval' },
    { id: 2, name: 'Pawan', lastName: 'Kumawat', username: 'kumawat.Pawan' },
    { id: 3, name: 'Pawan', lastName: 'Kumar', username: 'Kumar.Pawan' },
    { id: 4, name: 'Saurabh', lastName: 'Shinde', username: 'Shinde.Saurabh' },
  ];

  addUser() {
    this.users = [
      {
        id: 5,
        name: 'Dnyaneshwar',
        lastName: 'Shinde',
        username: 'Shinde.Dnyaneshwar',
      },
      ...this.users,
    ];
    console.log('Current Users', this.users);
  }
}
