import { Component } from '@angular/core';
import { ComingSoonPageComponent } from '../coming-soon-page/coming-soon-page.component';

@Component({
  selector: 'app-feed-view',
  standalone: true,
  imports: [ComingSoonPageComponent],
  templateUrl: './feed-view.component.html',
  styleUrl: './feed-view.component.css',
})
export class FeedViewComponent {}
