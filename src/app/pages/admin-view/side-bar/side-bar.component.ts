import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgUserComponent } from '../../../components/icons';
import { ButtonComponent } from '../../../components/button/button.component';
import { SignInCardComponent } from '../../../components/log-in/sign-in-card/sign-in-card.component';
import { User } from '../../../models/user';
import { ITable } from './model/table';

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

  callTableEvent(tableName: string) {
    this.callTable.emit(tableName);
  }

  tableList: ITable[] = [
    {
      table_id: 1,
      table_name: 'UsersTable',
    },
    {
      table_id: 2,
      table_name: 'RolesTable',
    },
    {
      table_id: 3,
      table_name: 'CurrenciesTable',
    },
    {
      table_id: 4,
      table_name: 'PlansTable',
    },
    {
      table_id: 5,
      table_name: 'ProgLanguagesTable',
    },
    {
      table_id: 6,
      table_name: 'SoftwaresTable',
    },
    {
      table_id: 7,
      table_name: 'TagsTable',
    },
  ];
}
