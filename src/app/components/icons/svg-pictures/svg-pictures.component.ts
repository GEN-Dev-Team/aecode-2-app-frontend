import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-pictures',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M18.4911 1.5H3.76445C2.60255 1.5 1.66064 2.44518 1.66064 3.61111V18.3889C1.66064 19.5548 2.60255 20.5 3.76445 20.5H18.4911C19.653 20.5 20.5949 19.5548 20.5949 18.3889V3.61111C20.5949 2.44518 19.653 1.5 18.4911 1.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.44602 8.8889C8.31744 8.8889 9.02387 8.18001 9.02387 7.30556C9.02387 6.43111 8.31744 5.72223 7.44602 5.72223C6.57459 5.72223 5.86816 6.43111 5.86816 7.30556C5.86816 8.18001 6.57459 8.8889 7.44602 8.8889Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5946 14.1667L15.3351 8.88892L3.76416 20.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgPicturesComponent {
  @Input() class = '';
}
