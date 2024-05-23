import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-send',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      [class]="class"
    >
      <path
        d="M15.1209 1.33331L7.81299 8.66665"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.1207 1.33331L10.4702 14.6666L7.81273 8.66665L1.8335 5.99998L15.1207 1.33331Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgSendComponent {
  @Input() class = '';
}
