import { Component, Input } from '@angular/core';
import { Comment } from '../../../../models/comment';
@Component({
  selector: 'app-users-comments',
  standalone: true,
  imports: [],
  templateUrl: './users-comments.component.html',
  styleUrl: './users-comments.component.css',
})
export class UsersCommentsComponent {
  @Input() comment!: Comment;
}
