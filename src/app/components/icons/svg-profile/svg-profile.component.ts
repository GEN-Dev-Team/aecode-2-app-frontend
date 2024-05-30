import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-profile',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M10.5 11.25C13.6055 11.25 16.125 8.73047 16.125 5.625C16.125 2.51953 13.6055 0 10.5 0C7.39453 0 4.875 2.51953 4.875 5.625C4.875 8.73047 7.39453 11.25 10.5 11.25ZM15.5 12.5H13.3477C12.4805 12.8984 11.5156 13.125 10.5 13.125C9.48438 13.125 8.52344 12.8984 7.65234 12.5H5.5C2.73828 12.5 0.5 14.7383 0.5 17.5V18.125C0.5 19.1602 1.33984 20 2.375 20H18.625C19.6602 20 20.5 19.1602 20.5 18.125V17.5C20.5 14.7383 18.2617 12.5 15.5 12.5Z"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgProfileComponent {
  @Input() class = '';
}
