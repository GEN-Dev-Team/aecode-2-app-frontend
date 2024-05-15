import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Role } from '../../../../models/role';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RoleService } from '../../../../core/services/role.service';

@Component({
  selector: 'app-role-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.css',
})
export class RoleFormComponent implements OnChanges, OnInit {
  @Output() onCloseModel = new EventEmitter<boolean>();
  @Input() data: Role | null = null;
  roleList: Role[] = [];
  Role!: Role;
  roleForm: FormGroup;

  constructor(private fb: FormBuilder, private roleService: RoleService) {
    this.roleForm = this.fb.group({
      id_role: new FormControl('', [Validators.required]),
      role_name: new FormControl('', [Validators.required]),
      role_description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getRoles();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.roleForm.patchValue({
        id_role: this.data.id_role,
        role_name: this.data.role_name,
        role_description: this.data.role_description,
      });
    }
  }

  onSubmit() {
    if (this.roleForm.valid) {
      console.log(this.data);
      if (this.data) {
        this.roleService.updateRole(this.roleForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Role updated successfully!');
          },
        });
      } else {
        this.roleService.createRole(this.roleForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Role created successfully!');
          },
        });
      }
    } else {
      this.roleForm.markAllAsTouched();
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

  onClose() {
    this.onCloseModel.emit(false);
  }

  resetForm() {
    this.roleForm.reset();
    this.onClose();
  }
}
