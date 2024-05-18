import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { User } from '../../../models/user';
import { UserServiceService } from '../../../core/services/user.service';
import { SignInCardComponent } from '../../../components/log-in/sign-in-card/sign-in-card.component';
import { ModelComponent } from '../../../components/model/model.component';
import { ToastrService } from 'ngx-toastr';

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
  editUser = false;

  constructor(
    private userService: UserServiceService,
    private toastService: ToastrService
  ) {}
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
        this.toastService.success('User deleted successfully!');
        this.getAllUsers();
      },
    });
  }

  loadUser(userData: User) {
    this.editUser = true;
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
    this.editUser = false;
  }
}
