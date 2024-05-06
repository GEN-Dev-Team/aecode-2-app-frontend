import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SvgFacebookComponent } from '../icons/svg-facebook/svg-facebook.component';
import { SvgInstagramComponent } from '../icons/svg-instagram/svg-instagram.component';
import { SvgTikTokComponent } from '../icons/svg-tik-tok/svg-tik-tok.component';
import { SvgLinkedInComponent } from '../icons/svg-linked-in/svg-linked-in.component';
import { SvgTelegramComponent } from '../icons/svg-telegram/svg-telegram.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialMediaElementComponent,
    SvgFacebookComponent,
    SvgInstagramComponent,
    SvgTikTokComponent,
    SvgLinkedInComponent,
    SvgTelegramComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
