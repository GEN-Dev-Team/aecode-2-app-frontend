import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-videos',
  standalone: true,
  imports: [],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      [class]="class"
    >
      <path
        d="M18.4656 1.5H3.65905C2.51922 1.5 1.59521 2.42722 1.59521 3.571V18.429C1.59521 19.5728 2.51922 20.5 3.65905 20.5H18.4656C19.6055 20.5 20.5295 19.5728 20.5295 18.429V3.571C20.5295 2.42722 19.6055 1.5 18.4656 1.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.3291 1.5V20.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7959 1.5V20.5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.59521 11.0004H20.5295"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.59521 6.25037H6.32878"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.59521 15.75H6.32878"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7959 15.75H20.5295"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7959 6.25037H20.5295"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgVideosComponent {
  @Input() class = '';
}
