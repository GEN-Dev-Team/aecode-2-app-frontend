import { Component } from '@angular/core';
import { SignInCardComponent } from '../../components/log-in/sign-in-card/sign-in-card.component';
import { User } from '../../models/user';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SgvTrashComponent } from '../../components/icons/sgv-trash/sgv-trash.component';
import { SvgEditComponent } from '../../components/icons/svg-edit/svg-edit.component';
import { ButtonComponent } from '../../components/button/button.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role/role-form/role-form.component';
import { Role } from '../../models/role';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyFormComponent } from './currency/currency-form/currency-form.component';
import { PlanComponent } from './plan/plan.component';
import { PlanFormComponent } from './plan/plan-form/plan-form.component';
import { ProgLanguageComponent } from './prog-language/prog-language.component';
import { ProgLanguageFormComponent } from './prog-language/prog-language-form/prog-language-form.component';
import { SoftwareComponent } from './software/software.component';
import { SoftwareFormComponent } from './software/software-form/software-form.component';
import { TagComponent } from './tag/tag.component';
import { TagFormComponent } from './tag/tag-form/tag-form.component';

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
    CurrencyComponent,
    CurrencyFormComponent,
    PlanComponent,
    PlanFormComponent,
    ProgLanguageComponent,
    ProgLanguageFormComponent,
    SoftwareComponent,
    SoftwareFormComponent,
    TagComponent,
    TagFormComponent,
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css',
})
export class AdminViewComponent {
  // Declarar variables para los eventos
  callTable: string = 'UsersTable';

  // Eventos para mostrar las tablas
  getCallTable(callUsersTableValue: string) {
    this.callTable = callUsersTableValue;
  }
}
