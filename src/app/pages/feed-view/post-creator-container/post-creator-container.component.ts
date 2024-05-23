import { Component, Input } from '@angular/core';
import { PostCreatorElementComponent } from './post-creator-element/post-creator-element.component';
import { SvgSendComponent } from '../../../components/icons/svg-send/svg-send.component';
import { SvgCodesComponent } from '../../../components/icons/svg-codes/svg-codes.component';
import { SvgPicturesComponent } from '../../../components/icons/svg-pictures/svg-pictures.component';
import { SvgFilesComponent } from '../../../components/icons/svg-files/svg-files.component';
import { SvgVideosComponent } from '../../../components/icons/svg-videos/svg-videos.component';

@Component({
  selector: 'app-post-creator-container',
  standalone: true,
  imports: [
    PostCreatorElementComponent,
    SvgSendComponent,
    SvgCodesComponent,
    SvgPicturesComponent,
    SvgFilesComponent,
    SvgVideosComponent,
  ],
  templateUrl: './post-creator-container.component.html',
  styleUrl: './post-creator-container.component.css',
})
export class PostCreatorContainerComponent {
  @Input() class = '';
}
