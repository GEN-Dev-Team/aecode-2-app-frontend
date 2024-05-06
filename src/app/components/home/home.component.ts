import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { ScriptCarouselComponent } from '../script-carousel/script-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainContainerComponent, ScriptCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
