import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import {
  SvgBlogComponent,
  SvgCoursesComponent,
  SvgHomeComponent,
  SvgNotificationComponent,
  SvgProfileComponent,
  SvgScriptComponent,
} from '../icons';
import { SvgPointComponent } from '../icons/svg-point/svg-point.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterLink } from '@angular/router';
import { SvgUnlogUserComponent } from '../icons/svg-unlog-user/svg-unlog-user.component';
import { SvgCaretDownComponent } from '../icons/svg-caret-down/svg-caret-down.component';
import { SvgCaretUpComponent } from '../icons/svg-caret-up/svg-caret-up.component';
import { User } from '../../models/user';
import { AuthService } from '../../core/services/auth.service';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SvgNotificationComponent,
    SvgPointComponent,
    LogInComponent,
    RouterLink,
    SvgScriptComponent,
    SvgHomeComponent,
    SvgProfileComponent,
    SvgCoursesComponent,
    SvgBlogComponent,
    SvgUnlogUserComponent,
    SvgCaretDownComponent,
    SvgCaretUpComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnChanges, OnInit {
  auth = inject(AuthService);
  @Input() userLogged!: User;
  @Output() isLogged = new EventEmitter<boolean>();

  constructor(private localStorage: LocalStorageService) {}

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.userLogged) {
      this.isLogged.emit(true);
    }
  }

  ngOnInit(): void {
    this.userLogged = this.localStorage.getItem('User Logged')!;
    if (this.userLogged) {
      this.isLogged.emit(true);
    }
  }

  signOut() {
    this.isLogged.emit(false);
    this.localStorage.clear();
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
