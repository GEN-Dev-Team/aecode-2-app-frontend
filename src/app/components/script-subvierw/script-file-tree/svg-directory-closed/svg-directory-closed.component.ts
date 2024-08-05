import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-directory-closed',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
    >
      <path
        d="M18.8105 3H11.3105L8.81055 0.5H2.56055C1.525 0.5 0.685547 1.33945 0.685547 2.375V13.625C0.685547 14.6605 1.525 15.5 2.56055 15.5H18.8105C19.8461 15.5 20.6855 14.6605 20.6855 13.625V4.875C20.6855 3.83945 19.8461 3 18.8105 3Z"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgDirectoryClosedComponent {
  @Input() class = '';
}
