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
import { RoleFormComponent } from './role/role-form/role-form.component';
import { Role } from '../../models/role';

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
    RoleFormComponent,
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css',
})
export class AdminViewComponent {
  userList: User[] = [];
  user!: User;
  role!: Role;
  constructor(private userService: UserServiceService) {}

  // Declarar variables para los eventos
  callTable: string = 'RolesTable';

  // Eventos para mostrar las tablas
  getCallTable(callUsersTableValue: string) {
    this.callTable = callUsersTableValue;
  }

  getUserData(user: User) {
    this.user = user;
  }

  getRoleData(role: Role) {
    this.role = role;
  }
}
