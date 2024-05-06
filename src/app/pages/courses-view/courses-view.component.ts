import { Component } from '@angular/core';
import { ComingSoonPageComponent } from '../coming-soon-page/coming-soon-page.component';

@Component({
  selector: 'app-courses-view',
  standalone: true,
  imports: [ComingSoonPageComponent],
  templateUrl: './courses-view.component.html',
  styleUrl: './courses-view.component.css',
})
export class CoursesViewComponent {}
