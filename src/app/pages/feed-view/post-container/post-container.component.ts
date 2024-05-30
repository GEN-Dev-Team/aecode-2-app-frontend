import { Component, Input } from '@angular/core';
import { SvgHeartComponent } from '../../../components/icons/svg-heart/svg-heart.component';
import { SvgViewComponent } from '../../../components/icons/svg-view/svg-view.component';
import { SvgCommentComponent } from '../../../components/icons/svg-comment/svg-comment.component';
import { SvgBookmarkComponent } from '../../../components/icons';
import { SvgPointComponent } from '../../../components/icons/svg-point/svg-point.component';
import { SvgShareComponent } from '../../../components/icons/svg-share/svg-share.component';
import { ReactionItemComponent } from '../../../components/reaction-item/reaction-item.component';

@Component({
  selector: 'app-post-container',
  standalone: true,
  imports: [
    SvgHeartComponent,
    SvgViewComponent,
    SvgCommentComponent,
    SvgBookmarkComponent,
    ReactionItemComponent,
    SvgPointComponent,
    SvgShareComponent,
  ],
  templateUrl: './post-container.component.html',
  styleUrl: './post-container.component.css',
})
export class PostContainerComponent {
  @Input() class = '';
}
