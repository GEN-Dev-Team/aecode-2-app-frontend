import { Component, Output, EventEmitter } from '@angular/core';
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
import { switchMap } from 'rxjs';
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
export class LogInCardComponent {
  // Para enviar un evento al componente padre (log-in) usamos Output y EventEmitter de angular Core
  @Output() callingSignInCard = new EventEmitter<string>();
  @Output() userLogged = new EventEmitter<User>();

  loginForm!: FormGroup;
  isLogged = false;
  userLogin!: LogIn;
  user!: any;

  constructor(
    fb: FormBuilder,
    private logInService: LoginService,
    private userService: UserServiceService,
    private toastService: ToastrService
  ) {
    this.loginForm = fb.group({
      id_email: new FormControl(''),
      profile_email: new FormControl(''),
      profile_password: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userLogin = this.loginForm.value;
      console.log(this.userLogin);

      this.logInService.logUser(this.userLogin).subscribe({
        next: (response) => {
          this.user = response;
          console.log('Estos son los datos del usuario:', response);
          console.log('Estos son los datos del usuario:', this.user);
          this.userLoggedEvent();
        },
        error: (error) => {
          console.log(error);
          console.log(error.message);
          this.toastService.error(error);
        },
      });
    }
  }

  userLoggedEvent() {
    this.userLogged.emit(this.user);
    console.log('User Logged activado');
  }

  // Función usada en el html para obtener el contenido del evento que se enviará al padre
  callSignInCard() {
    this.callingSignInCard.emit('TRUE');
  }
}
