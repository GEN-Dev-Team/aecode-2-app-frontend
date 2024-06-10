import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-copy',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="24"
      viewBox="0 0 26 24"
    >
      <path
        d="M15.2719 7V7C15.2719 6.06812 15.2719 5.60218 15.1197 5.23463C14.9167 4.74458 14.5273 4.35523 14.0373 4.15224C13.6697 4 13.2038 4 12.2719 4H8.76392C6.8783 4 5.93549 4 5.3497 4.58579C4.76392 5.17157 4.76392 6.11438 4.76392 8V10.8476C4.76392 11.9228 4.76392 12.4604 4.96524 12.8745C5.16111 13.2774 5.48655 13.6028 5.88941 13.7987C6.30349 14 6.84109 14 7.91631 14V14"
        stroke-width="2"
      />
      <rect
        x="11.0688"
        y="10"
        width="10.508"
        height="10"
        rx="2"
        stroke-width="2"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgCopyComponent {
  @Input() class = '';
}
