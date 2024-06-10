import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-close-model',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M22.5 7.5L7.5 22.5"
        stroke="#B4BBBF"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 7.5L22.5 22.5"
        stroke="#B4BBBF"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgCloseModelComponent {
  @Input() class: string = '';
}
