import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SvgFacebookComponent } from '../icons/svg-facebook/svg-facebook.component';
import { SvgInstagramComponent } from '../icons/svg-instagram/svg-instagram.component';
import { SvgTikTokComponent } from '../icons/svg-tik-tok/svg-tik-tok.component';
import { SvgLinkedInComponent } from '../icons/svg-linked-in/svg-linked-in.component';
import { SvgTelegramComponent } from '../icons/svg-telegram/svg-telegram.component';
import { SvgCaretUpComponent } from '../icons/svg-caret-up/svg-caret-up.component';
import { SvgCaretDownComponent } from '../icons/svg-caret-down/svg-caret-down.component';
import { SvgSettingComponent } from '../icons/svg-setting/svg-setting.component';
import { SvgQuestionIconComponent } from '../icons/svg-question-icon/svg-question-icon.component';

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
    SvgCaretUpComponent,
    SvgCaretDownComponent,
    SvgSettingComponent,
    SvgQuestionIconComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
