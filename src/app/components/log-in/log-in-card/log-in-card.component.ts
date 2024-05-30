declare var google: any;

import { Component, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { SvgGoogleComponent } from '../../icons/svg-google/svg-google.component';
import { SvgAppleComponent } from '../../icons/svg-apple/svg-apple.component';
import { SvgViewPasswordComponent } from '../../icons/svg-view-password/svg-view-password.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { User } from '../../../models/user';
import { LogIn } from '../../../models/login';
import { LoginService } from '../../../core/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { UserServiceService } from '../../../core/services/user.service';

@Component({
  selector: 'app-log-in-card',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    SvgGoogleComponent,
    SvgAppleComponent,
    SvgViewPasswordComponent,
    HeaderComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './log-in-card.component.html',
  styleUrl: './log-in-card.component.css',
})
export class LogInCardComponent implements OnInit {
  private router = inject(Router);
  // Para enviar un evento al componente padre (log-in) usamos Output y EventEmitter de angular Core
  @Output() callingSignInCard = new EventEmitter<string>();
  @Output() userLogged = new EventEmitter<User>();

  loginForm!: FormGroup;
  userLogin!: LogIn;
  user!: any;

  constructor(
    fb: FormBuilder,
    private logInService: LoginService,
    private toastService: ToastrService,
    private userService: UserServiceService,
    private localStorage: LocalStorageService
  ) {
    this.loginForm = fb.group({
      id_email: new FormControl(''),
      profile_email: new FormControl(''),
      profile_password: new FormControl(''),
    });
  }

  // Inicio de sesion con google
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '968243235984-1gadvmd2p7scrg685eoip19qnfv011vj.apps.googleusercontent.com',
      callback: (response: any) => {
        this.handleLogin(response);
      },
    });
    google.accounts.id.renderButton(document.getElementById('google-button'), {
      size: 'large',
      type: 'icon',
      shape: 'circle',
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //Decodificamos el token
      const payload = this.decodeToken(response.credential);
      //Almacenamos en la sesion, session storage
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload));
      //Creamos usuario para almacenar en nuestra base de datos
      this.user = {
        id_profile: 0,
        profile_email: payload.email,
        profile_password: '123',
        profile_Fullname: payload.given_name,
      };

      console.log(this.user);
      return;
      this.userService.createUser(payload).subscribe({
        next: (response) => {
          this.user = response;
          console.log(this.user);
          this.localStorage.setItem('User Logged', this.user);
          this.userLoggedEvent();
        },
        error: (error) => {
          this.toastService.error(error);
        },
      });
      //Navegamos a la ruta principal
      this.router.navigate(['/scripts']);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userLogin = this.loginForm.value;

      this.logInService.logUser(this.userLogin).subscribe({
        next: (response) => {
          this.user = response;
          console.log(this.user);
          this.localStorage.setItem('User Logged', this.user);
          this.userLoggedEvent();
        },
        error: (error) => {
          this.toastService.error(error);
        },
      });
    }
  }

  userLoggedEvent() {
    this.userLogged.emit(this.user);
    this.router.navigate(['/scripts']);
    console.log('User LogIn Card component', this.user);
  }

  // Función usada en el html para obtener el contenido del evento que se enviará al padre
  callSignInCard() {
    this.callingSignInCard.emit('TRUE');
  }
}
