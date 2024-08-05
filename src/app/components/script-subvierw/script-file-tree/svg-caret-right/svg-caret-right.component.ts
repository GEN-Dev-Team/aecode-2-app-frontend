import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-caret-right',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
    >
      <path
        d="M9.35564 8.79663L2.98264 15.1696C2.54215 15.6101 1.82987 15.6101 1.39407 15.1696L0.335026 14.1106C-0.105462 13.6701 -0.105462 12.9578 0.335026 12.522L4.84768 8L0.33034 3.48266C-0.110147 3.04217 -0.110147 2.3299 0.330341 1.8941L1.38938 0.830365C1.82987 0.389879 2.54215 0.389879 2.97795 0.830366L9.35096 7.20337C9.79613 7.64386 9.79613 8.35614 9.35564 8.79663Z"
        fill="#381187"
      />
    </svg>
  `,
  styles: ``,
})
export class SvgCaretRightComponent {
  @Input() class = '';
}
