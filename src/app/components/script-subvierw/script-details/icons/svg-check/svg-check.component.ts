import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-check',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 8"
      fill="none"
    >
      <path
        d="M1.30186 2.84708L3.26533 4.85344C3.31135 4.90046 3.38639 4.90046 3.43241 4.85344L7.61103 0.583553C7.72005 0.472149 7.89703 0.472149 8.00605 0.583553L8.90443 1.50155C9.01345 1.61296 9.01345 1.79381 8.90443 1.90521L3.65045 7.27359C3.54143 7.38499 3.36445 7.38499 3.25542 7.27359L0.08279 4.03166C-0.0290645 3.91736 -0.0258788 3.73072 0.0902234 3.62076L0.914266 2.83949C1.02435 2.73496 1.19532 2.73857 1.30151 2.84708H1.30186Z"
        fill="white"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgCheckComponent {
  @Input() class = '';
}
