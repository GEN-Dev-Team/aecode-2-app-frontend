import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-file',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="61"
      viewBox="0 0 61 61"
    >
      <path
        d="M33.4289 8H23C18.286 8 15.9289 8 14.4645 9.46447C13 10.9289 13 13.286 13 18V43C13 47.714 13 50.0711 14.4645 51.5355C15.9289 53 18.286 53 23 53H38C42.714 53 45.0711 53 46.5355 51.5355C48 50.0711 48 47.714 48 43V22.5711C48 21.5492 48 21.0383 47.8097 20.5788C47.6194 20.1194 47.2581 19.7581 46.5355 19.0355L36.9645 9.46447C36.2419 8.74189 35.8806 8.3806 35.4212 8.1903C34.9617 8 34.4508 8 33.4289 8Z"
        stroke-width="3"
      />
      <path
        d="M33 8V18C33 20.357 33 21.5355 33.7322 22.2678C34.4645 23 35.643 23 38 23H48"
        stroke-width="3"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgFileComponent {
  @Input() class: string = '';
}
