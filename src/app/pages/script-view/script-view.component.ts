import { Component } from '@angular/core';
import { AsideFilterComponent } from '../../components/aside-filter/aside-filter.component';
import { MainContainerComponent } from '../../components/layout';
import { SvgFilterComponent, SvgUploadComponent } from '../../components/icons';
import { SgvTrashComponent } from '../../components/icons/sgv-trash/sgv-trash.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HomeComponent } from './home/home.component';
import { ScriptsSliderComponent } from './scripts-slider/scripts-slider.component';
import { ScriptsContainerComponent } from './scripts-container/scripts-container.component';
import { UploadScriptViewComponent } from './upload-script-view/upload-script-view.component';

@Component({
  selector: 'app-script-view',
  standalone: true,
  imports: [
    HomeComponent,
    ScriptsSliderComponent,
    MainContainerComponent,
    AsideFilterComponent,
    ScriptsContainerComponent,
    SvgFilterComponent,
    SgvTrashComponent,
    SvgUploadComponent,
    ButtonComponent,
    UploadScriptViewComponent,
  ],
  templateUrl: './script-view.component.html',
  styleUrl: './script-view.component.css',
})
export class ScriptViewComponent {}
