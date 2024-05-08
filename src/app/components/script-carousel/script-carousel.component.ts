import { Component } from '@angular/core';
import { Script } from '../slider/models/script';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'app-script-carousel',
  standalone: true,
  imports: [CarouselItemComponent],
  templateUrl: './script-carousel.component.html',
  styleUrl: './script-carousel.component.css',
})
export class ScriptCarouselComponent {
  scriptList: Script[] = [
    {
      script_id: 1,
      script_name: 'Sofistik',
      script_img: 'https://i.ytimg.com/vi/-3uO0Qqfklo/maxresdefault.jpg',
    },
    {
      script_id: 2,
      script_name: 'Sofistik',
      script_img:
        'https://codigospython.com/wp-content/uploads/2023/09/script-python-1.png',
    },
    {
      script_id: 3,
      script_name: 'Sofistik',
      script_img:
        'https://foureyes.io/images/main/_opengraph/6386/code-webpage-framed.jpg',
    },
    {
      script_id: 4,
      script_name: 'Sofistik',
      script_img:
        'https://www.educatica.es/wp-content/uploads/2021/03/imagen-93-1024x425.png',
    },
  ];
}
