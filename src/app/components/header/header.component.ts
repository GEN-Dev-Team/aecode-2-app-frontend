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
import { RouterLink, RouterOutlet } from '@angular/router';
import { SvgUnlogUserComponent } from '../icons/svg-unlog-user/svg-unlog-user.component';
import { SvgCaretDownComponent } from '../icons/svg-caret-down/svg-caret-down.component';
import { SvgCaretUpComponent } from '../icons/svg-caret-up/svg-caret-up.component';
import { User } from '../../models/user';
import { AuthService } from '../../core/services/auth.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { SvgOffersComponent } from '../icons/svg-offers/svg-offers.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
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
    SvgOffersComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnChanges, OnInit {
  auth = inject(AuthService);
  @Input() userLogged!: User;
  @Output() isLogged = new EventEmitter<boolean>();
  isUserLogged = true;

  constructor(private localStorage: LocalStorageService) {}

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.userLogged) {
      this.isLogged.emit(true);
      this.isUserLogged = true;
    }
  }

  ngOnInit(): void {
    this.userLogged = this.localStorage.getItem('User Logged')!;
    if (this.userLogged) {
      this.isLogged.emit(true);
    }
  }

  signOut() {
    this.isUserLogged = false;
    this.isLogged.emit(false);
    this.localStorage.clear();
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}
