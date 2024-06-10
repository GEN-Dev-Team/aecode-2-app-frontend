import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-add-script',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
    >
      <circle
        cx="15"
        cy="15.5"
        r="10.25"
        stroke-opacity="0.25"
        stroke-width="2"
      />
      <path d="M15 10.5L15 20.5" stroke-width="2" stroke-linecap="round" />
      <path d="M20 15.5L10 15.5" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  styles: ``,
})
export class SvgAddScriptComponent {
  @Input() class = '';
}
