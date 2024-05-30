import { Component } from '@angular/core';
import { SvgCommentComponent } from '../../../../components/icons/svg-comment/svg-comment.component';
import { SvgHeartComponent } from '../../../../components/icons/svg-heart/svg-heart.component';
import { SvgViewComponent } from '../../../../components/icons/svg-view/svg-view.component';
import { ReactionItemComponent } from '../../../../components/reaction-item/reaction-item.component';

@Component({
  selector: 'app-script-container',
  standalone: true,
  imports: [
    SvgCommentComponent,
    ReactionItemComponent,
    SvgHeartComponent,
    SvgViewComponent,
  ],
  templateUrl: './script-container.component.html',
  styleUrl: './script-container.component.css',
})
export class ScriptContainerComponent {}
