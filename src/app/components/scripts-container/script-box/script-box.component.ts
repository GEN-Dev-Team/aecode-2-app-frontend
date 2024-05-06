import { Component } from '@angular/core';
import { SvgBookmarkComponent } from '../../icons';
import { SvgViewComponent } from '../../icons/svg-view/svg-view.component';
import { SvgHeartComponent } from '../../icons/svg-heart/svg-heart.component';
import { SvgCommentComponent } from '../../icons/svg-comment/svg-comment.component';
import { ReactionItemComponent } from './reaction-item/reaction-item.component';

@Component({
  selector: 'app-script-box',
  standalone: true,
  imports: [
    SvgBookmarkComponent,
    SvgViewComponent,
    SvgHeartComponent,
    SvgCommentComponent,
    ReactionItemComponent,
  ],
  templateUrl: './script-box.component.html',
  styleUrl: './script-box.component.css',
})
export class ScriptBoxComponent {}
