import { Component } from '@angular/core';
import { UsersCommentsComponent } from './users-comments/users-comments.component';
import { MainContainerComponent } from '../../../components/layout';
import { ScriptsCarouselComponent } from '../scripts-carousel/scripts-carousel.component';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UsersCommentsComponent,
    MainContainerComponent,
    ScriptsCarouselComponent,
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
  ];
}
