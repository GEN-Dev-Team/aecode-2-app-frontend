import { Component } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { AsideFilterComponent } from '../../components/aside-filter/aside-filter.component';
import { MainContainerComponent } from '../../components/layout';
import { ScriptsContainerComponent } from '../../components/scripts-container/scripts-container.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { SvgFilterComponent, SvgUploadComponent } from '../../components/icons';
import { SgvTrashComponent } from '../../components/icons/sgv-trash/sgv-trash.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-script-view',
  standalone: true,
  imports: [
    MainContainerComponent,
    HomeComponent,
    SliderComponent,
    AsideFilterComponent,
    ScriptsContainerComponent,
    PaginatorComponent,
    SvgFilterComponent,
    SgvTrashComponent,
    SvgUploadComponent,
    ButtonComponent,
  ],
  templateUrl: './script-view.component.html',
  styleUrl: './script-view.component.css',
})
export class ScriptViewComponent {}
