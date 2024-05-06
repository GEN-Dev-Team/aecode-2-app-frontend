import { Component, OnInit } from '@angular/core';
import { SignInCardComponent } from '../../components/log-in/sign-in-card/sign-in-card.component';
import { UserServiceService } from '../../core/services/user.service';
import { User } from '../../models/user';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SgvTrashComponent } from '../../components/icons/sgv-trash/sgv-trash.component';
import { SvgEditComponent } from '../../components/icons/svg-edit/svg-edit.component';
import { ButtonComponent } from '../../components/button/button.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [
    SignInCardComponent,
    SideBarComponent,
    SgvTrashComponent,
    SvgEditComponent,
    ButtonComponent,
    UserComponent,
    RoleComponent,
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css',
})
export class AdminViewComponent implements OnInit {
  userList: User[] = [];
  user!: User;
  constructor(private userService: UserServiceService) {}

  // Declarar variables para los eventos
  callTable: string = 'UsersTable';

  // Eventos para mostrar las tablas
  getCallTable(callUsersTableValue: string) {
    this.callTable = callUsersTableValue;
  }

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
