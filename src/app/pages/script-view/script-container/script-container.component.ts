import { Component, Input } from '@angular/core';
import { Script } from '../../../components/slider/models/script';
import { SvgCommentComponent } from '../../../components/icons/svg-comment/svg-comment.component';
import { ReactionItemComponent } from '../../../components/scripts-container/script-box/reaction-item/reaction-item.component';
import { SvgHeartComponent } from '../../../components/icons/svg-heart/svg-heart.component';
import { SvgViewComponent } from '../../../components/icons/svg-view/svg-view.component';

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
export class ScriptContainerComponent {
  @Input() script: Script | undefined;
}
