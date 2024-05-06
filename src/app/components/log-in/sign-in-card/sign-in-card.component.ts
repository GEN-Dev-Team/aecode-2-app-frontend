import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SvgAppleComponent } from '../../icons/svg-apple/svg-apple.component';
import { SvgGoogleComponent } from '../../icons/svg-google/svg-google.component';
import { SvgViewPasswordComponent } from '../../icons/svg-view-password/svg-view-password.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserServiceService } from '../../../core/services/user.service';
import { User } from '../../../models/user';
import { RoleService } from '../../../core/services/role.service';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-sign-in-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SvgAppleComponent,
    SvgGoogleComponent,
    SvgViewPasswordComponent,
  ],
  templateUrl: './sign-in-card.component.html',
  styleUrl: './sign-in-card.component.css',
})
export class SignInCardComponent implements OnChanges, OnInit {
  @Input() data: User | null = null;
  roleList: Role[] = [];
  Role!: Role;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private roleService: RoleService
  ) {
    this.userForm = this.fb.group({
      profile_Fullname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      profile_Gender: new FormControl('', [Validators.required]),
      profile_email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      profile_password: new FormControl('', [Validators.required]),
      profile_Birthdate: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getRoles();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.userForm.patchValue({
        profile_Fullname: this.data.profile_Fullname,
        username: this.data.username,
        profile_Gender: this.data.profile_Gender,
        profile_email: this.data.profile_email,
        profile_password: this.data.profile_password,
        profile_Birthdate: this.data.profile_Birthdate,
        rol: this.data.role.id_role,
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.userService
          .updateUser(this.data.id_profile as number, this.userForm.value)
          .subscribe({
            next: (response) => {
              console.log('User updated successfully!');
            },
          });
      } else {
        this.userService.createUser(this.userForm.value).subscribe({
          next: (response) => {
            console.log('User created successfully!');
          },
        });
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  getRoles() {
    this.roleService.getAllRoles().subscribe({
      next: (response) => {
        this.roleList = response;
        console.log(response);
      },
    });
  }

  getRole(id: number) {
    this.roleService.getRole(id).subscribe({
      next: (response) => {
        this.Role = response;
        console.log(response);
      },
    });
  }
}
