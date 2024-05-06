import { Component } from '@angular/core';
import { ComingSoonPageComponent } from '../coming-soon-page/coming-soon-page.component';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [ComingSoonPageComponent],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.css',
})
export class BlogViewComponent {}
