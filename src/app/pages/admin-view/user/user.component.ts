import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { User } from '../../../models/user';
import { UserServiceService } from '../../../core/services/user.service';
import { SignInCardComponent } from '../../../components/log-in/sign-in-card/sign-in-card.component';
import { ModelComponent } from '../../../components/model/model.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    ButtonComponent,
    SvgEditComponent,
    SgvTrashComponent,
    SignInCardComponent,
    ModelComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  isModelOpen = false;
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

        console.log('User deleted successfully!');
      },
    });
    this.getAllUsers();
  }

  loadUser(userData: User) {
    this.user = userData;
    this.openModel();
    console.log(userData);
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllUsers();
  }
}
