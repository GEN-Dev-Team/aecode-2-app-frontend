import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-directory-open',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="16"
      viewBox="0 0 23 16"
      fill="none"
    >
      <path
        d="M22.3709 9.40988L19.5418 14.2597C19.3216 14.6371 19.0064 14.9502 18.6275 15.1679C18.2486 15.3855 17.8193 15.5 17.3824 15.5H1.75879C1.03523 15.5 0.584414 14.7151 0.948984 14.0901L3.77805 9.24031C3.99821 8.86289 4.31345 8.54976 4.69235 8.33214C5.07124 8.11452 5.50056 8 5.9375 8H21.5611C22.2846 8 22.7355 8.78488 22.3709 9.40988ZM5.9375 6.75H18.75V4.875C18.75 3.83945 17.9105 3 16.875 3H10.625L8.125 0.5H1.875C0.839453 0.5 0 1.33945 0 2.375V13.2362L2.69832 8.61047C3.36773 7.46289 4.60895 6.75 5.9375 6.75Z"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgDirectoryOpenComponent {
  @Input() class = '';
}
