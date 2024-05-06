import { Component } from '@angular/core';
import { SvgPointComponent } from '../icons/svg-point/svg-point.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [SvgPointComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {}
