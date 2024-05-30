import { Component, Input } from '@angular/core';
import { SvgUnbookmarkComponent } from '../../../../components/icons/svg-unbookmark/svg-unbookmark.component';
import { SvgViewComponent } from '../../../../components/icons/svg-view/svg-view.component';
import { SvgHeartComponent } from '../../../../components/icons/svg-heart/svg-heart.component';
import { SvgCommentComponent } from '../../../../components/icons/svg-comment/svg-comment.component';
import { Script } from '../../scripts-slider/models/script';
import { ReactionItemComponent } from '../../../../components/reaction-item/reaction-item.component';
import { TagButtonComponent } from '../tag-button/tag-button.component';

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [
    SvgUnbookmarkComponent,
    SvgViewComponent,
    SvgHeartComponent,
    SvgCommentComponent,
    ReactionItemComponent,
    TagButtonComponent,
  ],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css',
})
export class CarouselItemComponent {
  @Input() script!: Script;
}
