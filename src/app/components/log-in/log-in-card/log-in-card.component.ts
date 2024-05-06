import { Component, Output, EventEmitter } from '@angular/core';
import { SvgGoogleComponent } from '../../icons/svg-google/svg-google.component';
import { SvgAppleComponent } from '../../icons/svg-apple/svg-apple.component';
import { SvgViewPasswordComponent } from '../../icons/svg-view-password/svg-view-password.component';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-log-in-card',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    SvgGoogleComponent,
    SvgAppleComponent,
    SvgViewPasswordComponent,
  ],
  templateUrl: './log-in-card.component.html',
  styleUrl: './log-in-card.component.css',
})
export class LogInCardComponent {
  // Para enviar un evento al componente padre (log-in) usamos Output y EventEmitter de angular Core
  @Output() callingSignInCard = new EventEmitter<string>();

  // Función usada en el html para obtener el contenido del evento que se enviará al padre
  callSignInCard() {
    this.callingSignInCard.emit('TRUE');
  }
}
