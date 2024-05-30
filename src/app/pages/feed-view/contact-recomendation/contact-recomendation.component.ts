import { Component } from '@angular/core';
import { SvgProfileComponent } from '../../../components/icons';
import { SvgViewComponent } from '../../../components/icons/svg-view/svg-view.component';

@Component({
  selector: 'app-contact-recomendation',
  standalone: true,
  imports: [SvgProfileComponent, SvgViewComponent],
  templateUrl: './contact-recomendation.component.html',
  styleUrl: './contact-recomendation.component.css',
})
export class ContactRecomendationComponent {}
