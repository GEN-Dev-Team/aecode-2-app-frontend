import { Component, Input } from '@angular/core';
import { Comment } from '../../../models/comment';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user-comments-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-comments-top.component.html',
  styleUrl: './user-comments-top.component.css',
  animations: [
    trigger('fadein', [
      transition('void=> *', [
        style({
          opacity: 0,
        }),
        animate('1200ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class UserCommentsTopComponent {
  @Input() comment!: Comment;
}
