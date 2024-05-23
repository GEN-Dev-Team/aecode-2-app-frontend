import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-container',
  standalone: true,
  imports: [],
  templateUrl: './side-container.component.html',
  styleUrl: './side-container.component.css',
})
export class SideContainerComponent {
  @Input() class = '';
}
