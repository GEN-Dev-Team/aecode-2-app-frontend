import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { User } from '../../../models/user';
import { UserServiceService } from '../../../core/services/user.service';
import { SignInCardComponent } from '../../../components/log-in/sign-in-card/sign-in-card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ButtonComponent,
    SvgEditComponent,
    SgvTrashComponent,
    SignInCardComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userList: User[] = [];
  user!: User;
  constructor(private userService: UserServiceService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.userList = response;
    });
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: (response) => {
        this.user = response;
      },
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (response) => {
        this.userList = response;
        this.getAllUsers();
        console.log('User deleted successfully!');
      },
    });
  }

  updateUser(id: number, user: User) {
    this.userService.updateUser(id, user).subscribe((response) => {
      this.getAllUsers();
      console.log('User updated successfully!');
    });
  }

  loadUser(userData: User) {
    this.user = userData;
  }
}
