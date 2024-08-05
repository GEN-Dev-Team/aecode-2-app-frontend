import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multimedia-carousel',
  standalone: true,
  imports: [],
  templateUrl: './multimedia-carousel.component.html',
  styleUrl: './multimedia-carousel.component.css',
})
export class MultimediaCarouselComponent {
  @Input() multimedia: string[] = [];
}
