import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';
import { ScriptCarouselComponent } from '../script-carousel/script-carousel.component';
import { Comment } from '../../models/comment';
import { UserCommentsTopComponent } from './user-comments-top/user-comments-top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainContainerComponent,
    ScriptCarouselComponent,
    UserCommentsTopComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentComment = 0;

  commentList: Comment[] = [
    {
      id: 0,
      user_id: 1,
      user_comment: 'Genial plataforma',
      user_profile_photo: 'https://github.com/Sthepen-EA.png',
    },
    {
      id: 1,
      user_id: 2,
      user_comment: 'Me encanta!',
      user_profile_photo: 'https://github.com/Sthepen-EA.png',
    },
  ];
}
