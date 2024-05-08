import { Component, Input } from '@angular/core';
import { Script } from '../../slider/models/script';
import { SvgBookmarkComponent } from '../../icons';
import { SvgViewComponent } from '../../icons/svg-view/svg-view.component';
import { SvgHeartComponent } from '../../icons/svg-heart/svg-heart.component';
import { SvgCommentComponent } from '../../icons/svg-comment/svg-comment.component';
import { ReactionItemComponent } from '../../scripts-container/script-box/reaction-item/reaction-item.component';

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [
    SvgBookmarkComponent,
    SvgViewComponent,
    SvgHeartComponent,
    SvgCommentComponent,
    ReactionItemComponent,
  ],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css',
})
export class CarouselItemComponent {
  @Input() script: Script | undefined;
}
