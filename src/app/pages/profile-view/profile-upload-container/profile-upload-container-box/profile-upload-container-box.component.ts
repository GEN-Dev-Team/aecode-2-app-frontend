import { Component, Input } from '@angular/core';
import { ReactionItemComponent } from '../../../../components/scripts-container/script-box/reaction-item/reaction-item.component';
import { SvgHeartComponent } from '../../../../components/icons/svg-heart/svg-heart.component';
import { SvgCommentComponent } from '../../../../components/icons/svg-comment/svg-comment.component';
import { SvgViewComponent } from '../../../../components/icons/svg-view/svg-view.component';
import { SvgBookmarkComponent } from '../../../../components/icons';

@Component({
  selector: 'app-profile-upload-container-box',
  standalone: true,
  imports: [
    ReactionItemComponent,
    SvgHeartComponent,
    SvgCommentComponent,
    SvgViewComponent,
    SvgBookmarkComponent,
  ],
  templateUrl: './profile-upload-container-box.component.html',
  styleUrl: './profile-upload-container-box.component.css',
})
export class ProfileUploadContainerBoxComponent {}
