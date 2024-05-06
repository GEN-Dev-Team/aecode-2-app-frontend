import { Component } from '@angular/core';
import { SvgArrowRightComponent } from '../icons/svg-arrow-right/svg-arrow-right.component';

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [SvgArrowRightComponent],
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css',
})
export class CardProfileComponent {}
