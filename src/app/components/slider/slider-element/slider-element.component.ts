import { Component, Input } from '@angular/core';
import { SliderElement } from '../models';

@Component({
  selector: 'app-slider-element',
  standalone: true,
  imports: [],
  templateUrl: './slider-element.component.html',
  styleUrl: './slider-element.component.css',
})
export class SliderElementComponent {
  @Input() class = '';
  @Input() sliderElement: SliderElement = {
    description: '',
    imgPath: '',
  };
}
