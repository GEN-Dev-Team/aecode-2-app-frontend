import { Component } from '@angular/core';
import {
  SvgBlogComponent,
  SvgCoursesComponent,
  SvgHomeComponent,
  SvgProfileComponent,
  SvgScriptComponent,
} from '../icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    SvgScriptComponent,
    SvgHomeComponent,
    SvgProfileComponent,
    SvgCoursesComponent,
    SvgBlogComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
