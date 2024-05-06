import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgUserComponent } from '../../../components/icons';
import { ButtonComponent } from '../../../components/button/button.component';
import { SignInCardComponent } from '../../../components/log-in/sign-in-card/sign-in-card.component';
import { User } from '../../../models/user';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SvgUserComponent, ButtonComponent, SignInCardComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Input() class = '';
  user!: User;

  @Output() callTable = new EventEmitter<string>();

  callUsersTableEvent() {
    this.callTable.emit('UsersTable');
  }
  callRolesTableEvent() {
    this.callTable.emit('RolesTable');
  }
}
