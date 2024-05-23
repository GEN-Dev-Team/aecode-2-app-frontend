import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-caret-down',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="8"
      viewBox="0 0 11 8"
      [attr.fill]="fill"
    >
      <path
        d="M4.96892 7.0086L0.720243 2.75993C0.426585 2.46627 0.426585 1.99142 0.720243 1.70088L1.42627 0.994855C1.71993 0.701197 2.19478 0.701197 2.48532 0.994855L5.5 4.00329L8.51156 0.99173C8.80522 0.698073 9.28007 0.698073 9.5706 0.99173L10.2798 1.69776C10.5734 1.99142 10.5734 2.46627 10.2798 2.7568L6.03108 7.00548C5.73743 7.30226 5.26257 7.30226 4.96892 7.0086Z"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgCaretDownComponent {
  @Input() class = '';
  @Input() fill = '';
}
