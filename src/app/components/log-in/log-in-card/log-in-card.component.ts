import { Component, Output, EventEmitter } from '@angular/core';
import { SvgGoogleComponent } from '../../icons/svg-google/svg-google.component';
import { SvgAppleComponent } from '../../icons/svg-apple/svg-apple.component';
import { SvgViewPasswordComponent } from '../../icons/svg-view-password/svg-view-password.component';
import {
  Form,
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
import { randomInt } from 'crypto';

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
  @Output() userLogged = new EventEmitter<LogIn>();

  loginForm!: FormGroup;
  isLogged = false;
  userLogin!: LogIn;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      id: new FormControl(0),
      email: new FormControl(''),
      password: new FormControl(''),
      login_response: new FormControl(true),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userLogin = this.loginForm.value;
      if (this.userLogin.login_response) {
        this.isLogged = true;
      }
      console.log(this.userLogin);
      console.log(this.isLogged);
    }
  }

  userLoggedEvent() {
    this.userLogged.emit(this.userLogin);
  }

  // Función usada en el html para obtener el contenido del evento que se enviará al padre
  callSignInCard() {
    this.callingSignInCard.emit('TRUE');
  }
}
