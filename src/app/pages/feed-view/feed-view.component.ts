import { Component } from '@angular/core';
import { ComingSoonPageComponent } from '../coming-soon-page/coming-soon-page.component';
import { MainContainerComponent } from '../../components/layout';
import { PostCreatorContainerComponent } from './post-creator-container/post-creator-container.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { IOptionElement } from './model/IOptionElement';
import { ButtonComponent } from '../../components/button/button.component';
import { IGroupElement } from './model/IGroupElemnt';
import { SideContainerComponent } from './side-container/side-container.component';
import { SvgCaretDownComponent } from '../../components/icons/svg-caret-down/svg-caret-down.component';
import { PostContentComponent } from './post-container/post-content/post-content.component';
import { MediaContainerComponent } from './post-container/media-container/media-container.component';
import {
  SvgBookmarkComponent,
  SvgProfileComponent,
} from '../../components/icons';
import { SvgWorldComponent } from '../../components/icons/svg-world/svg-world.component';
import { SvgUsersComponent } from '../../components/icons/svg-users/svg-users.component';
import { SvgPaleteComponent } from '../../components/icons/svg-palete/svg-palete.component';
import { SvgForyouComponent } from '../../components/icons/svg-foryou/svg-foryou.component';
import { SvgBuildingComponent } from '../../components/icons/svg-building/svg-building.component';
import { IHashtagElement } from './model/IHashtagElement';
import { HashtagContainerElementComponent } from './hashtag-container-element/hashtag-container-element.component';

@Component({
  selector: 'app-feed-view',
  standalone: true,
  imports: [
    ComingSoonPageComponent,
    MainContainerComponent,
    PostCreatorContainerComponent,
    PostContainerComponent,
    ButtonComponent,
    SideContainerComponent,
    SvgCaretDownComponent,
    MediaContainerComponent,
    PostContentComponent,
    SvgProfileComponent,
    SvgBookmarkComponent,
    SvgWorldComponent,
    SvgUsersComponent,
    SvgPaleteComponent,
    SvgForyouComponent,
    SvgBuildingComponent,
    HashtagContainerElementComponent,
  ],
  templateUrl: './feed-view.component.html',
  styleUrl: './feed-view.component.css',
})
export class FeedViewComponent {
  optionsList: IOptionElement[] = [
    {
      id: 1,
      name: 'Para ti',
      svg: 'user',
    },
    {
      id: 2,
      name: 'Explorar',
      svg: 'user',
    },
    {
      id: 3,
      name: 'Contactos',
      svg: 'user',
    },
    {
      id: 4,
      name: 'Grupos',
      svg: 'user',
    },
    {
      id: 5,
      name: 'Empresas',
      svg: 'user',
    },
    {
      id: 6,
      name: 'Guardados',
      svg: 'user',
    },
    {
      id: 7,
      name: 'Editar estilos',
      svg: 'user',
    },
  ];

  userGroupList: IGroupElement[] = [
    {
      id: 1,
      name: 'Grupo de Ingeniería Civil Avanzada',
      img: 'user',
      views: 1000,
    },
    {
      id: 2,
      name: 'Revit and C# Innovators',
      img: 'user',
      views: 1000,
    },
    {
      id: 3,
      name: 'BIM Integration Master',
      img: 'user',
      views: 1000,
    },
  ];

  hashtagList: IHashtagElement[] = [
    {
      id_hashtag: 1,
      hashtag_name: 'bim',
    },
    {
      id_hashtag: 2,
      hashtag_name: 'ingenieria',
    },
    {
      id_hashtag: 3,
      hashtag_name: 'civil',
    },
    {
      id_hashtag: 4,
      hashtag_name: 'ingenieriacivil',
    },
    {
      id_hashtag: 5,
      hashtag_name: 'digital',
    },
    {
      id_hashtag: 6,
      hashtag_name: 'grasshoper',
    },
    {
      id_hashtag: 7,
      hashtag_name: 'ai',
    },
    {
      id_hashtag: 8,
      hashtag_name: 'c#',
    },
    {
      id_hashtag: 9,
      hashtag_name: 'revit',
    },
  ];

  groupList: IGroupElement[] = [
    {
      id: 1,
      name: '¿Qué tan importante es BIM Estructural?',
      img: 'https://blog.novatr.com/hs-fs/hubfs/Designing%20a%20building%20using%20structural%20design%20software.jpg?width=700&height=400&name=Designing%20a%20building%20using%20structural%20design%20software.jpg',
      views: 8123,
    },
    {
      id: 2,
      name: 'Consejos para ingenieros civiles',
      img: 'https://blog.novatr.com/hs-fs/hubfs/Designing%20a%20building%20using%20structural%20design%20software.jpg?width=700&height=400&name=Designing%20a%20building%20using%20structural%20design%20software.jpg',
      views: 10304,
    },
    {
      id: 3,
      name: 'Hablemos de Structural Design',
      img: 'https://blog.novatr.com/hs-fs/hubfs/Designing%20a%20building%20using%20structural%20design%20software.jpg?width=700&height=400&name=Designing%20a%20building%20using%20structural%20design%20software.jpg',
      views: 5933,
    },
  ];
}
