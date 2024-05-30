import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ButtonComponent } from '../../../components/button/button.component';
import { SvgViewComponent } from '../../../components/icons/svg-view/svg-view.component';
import { SvgProfileComponent } from '../../../components/icons';

@Component({
  selector: 'app-recomendation-container',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    ButtonComponent,
    SvgViewComponent,
    SvgProfileComponent,
  ],
  templateUrl: './recomendation-container.component.html',
  styleUrl: './recomendation-container.component.css',
})
export class RecomendationContainerComponent {}
