import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { MessageComponent } from './components/message/message.component';
import { ScriptViewComponent } from './pages/script-view/script-view.component';
import { FeedViewComponent } from './pages/feed-view/feed-view.component';
import { CoursesViewComponent } from './pages/courses-view/courses-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogIn } from './models/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    MessageComponent,
    ScriptViewComponent,
    FeedViewComponent,
    CoursesViewComponent,
    ProfileViewComponent,
    BlogViewComponent,
    PageNotFoundComponent,
    LogInComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLogged = false;
  LogIn!: LogIn;

  title = 'AECODE 2';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) initFlowbite();
  }
}
