import { Component, Input } from '@angular/core';
import { SocialMediaElement } from '../models';
@Component({
  selector: 'app-social-media-element',
  standalone: true,
  imports: [],
  templateUrl: './social-media-element.component.html',
  styleUrl: './social-media-element.component.css',
})
export class SocialMediaElementComponent {
  @Input() socialMediaElement: SocialMediaElement = {
    name: '',
    link: '',
    urlPath: '',
  };
}
