import { Component } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-feed-view',
  standalone: true,
  imports: [PageNotFoundComponent],
  templateUrl: './feed-view.component.html',
  styleUrl: './feed-view.component.css',
})
export class FeedViewComponent {}
