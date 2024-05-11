import { Component } from '@angular/core';
import { MainContainerComponent } from '../../components/layout';
import { ButtonComponent } from '../../components/button/button.component';
import { CardProfileComponent } from '../../components/card-profile/card-profile.component';
import { SvgUploadComponent } from '../../components/icons';
import { SvgBarsComponent } from '../../components/icons/svg-bars/svg-bars.component';
import { BudgetComponent } from '../../components/budget/budget.component';
import { SvgAirplaneComponent } from '../../components/icons/svg-airplane/svg-airplane.component';
import { SvgEditComponent } from '../../components/icons/svg-edit/svg-edit.component';
import { SvgCameraComponent } from '../../components/icons/svg-camera/svg-camera.component';
import { SvgProfileFilterComponent } from '../../components/icons/svg-profile-filter/svg-profile-filter.component';
import { ProfileUploadContainerComponent } from './profile-upload-container/profile-upload-container.component';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [
    MainContainerComponent,
    ButtonComponent,
    CardProfileComponent,
    ProfileUploadContainerComponent,
    SvgUploadComponent,
    SvgBarsComponent,
    BudgetComponent,
    SvgAirplaneComponent,
    SvgEditComponent,
    SvgProfileFilterComponent,
    SvgCameraComponent,
  ],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css',
})
export class ProfileViewComponent {
  profileKeyWords = [
    {
      id: 1,
      title: 'Revit',
    },
    {
      id: 2,
      title: 'Python',
    },
    {
      id: 3,
      title: 'C#',
    },
    {
      id: 4,
      title: 'Galapagos',
    },
  ];
}
