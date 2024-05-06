import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/role';
import { RoleService } from '../../../core/services/role.service';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { RoleFormComponent } from './role-form/role-form.component';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [
    ButtonComponent,
    SvgEditComponent,
    SgvTrashComponent,
    RoleFormComponent,
    RoleFormComponent,
  ],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css',
})
export class RoleComponent implements OnInit {
  roleList: Role[] = [];
  role!: Role;

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllRoles();
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe((response) => {
      this.roleList = response;
      console.log(response);
    });
  }

  createRole(role: Role) {
    this.roleService.createRole(role).subscribe((response) => {
      console.log(role);
      console.log('Role created successfully!');
    });
  }

  updateRole(id: number, role: Role) {
    this.roleService.updateRole(id, role).subscribe((response) => {
      console.log('Role updated successfully!');
    });
  }

  deleteRole(id: number) {
    this.roleService.deleteRole(id).subscribe((response) => {
      console.log('Role deleted successfully!');
    });
  }

  loadRole(roleData: Role) {
    this.role = roleData;
  }
}
