import { Component } from '@angular/core';
import { ComingSoonPageComponent } from '../coming-soon-page/coming-soon-page.component';

@Component({
  selector: 'app-offers-view',
  standalone: true,
  imports: [ComingSoonPageComponent],
  templateUrl: './offers-view.component.html',
  styleUrl: './offers-view.component.css',
})
export class OffersViewComponent {}
