import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-world',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
    >
      <ellipse cx="8.47405" cy="9" rx="7.47405" ry="7.5" stroke-width="2" />
      <ellipse cx="8.47367" cy="9" rx="2.80277" ry="7.5" stroke-width="2" />
      <path d="M1 9H15.9481" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  styles: ``,
})
export class SvgWorldComponent {
  @Input() class = '';
}
