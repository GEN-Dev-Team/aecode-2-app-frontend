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
import { ModelComponent } from '../../components/model/model.component';
import { IScript } from '../../models/script';
import { ScriptService } from '../../core/services/script.service';
import { ScriptFormComponent } from './upload-script-view/script-form/script-form.component';
import { ActivatedRoute } from '@angular/router';

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
    ModelComponent,
    ScriptFormComponent,
  ],
  templateUrl: './script-view.component.html',
  styleUrl: './script-view.component.css',
})
export class ScriptViewComponent {
  script!: IScript;
  scriptList: IScript[] = [];
  editScript = false;
  isModelOpen = false;

  constructor(
    private scriptService: ScriptService,
    public route: ActivatedRoute
  ) {}

  getAllScripts() {
    this.scriptService.getAllScripts().subscribe((response) => {
      this.scriptList = response;
    });
  }

  loadUser(scriptData: IScript) {
    this.editScript = true;
    this.script = scriptData;
    this.openModel();
    console.log(scriptData);
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllScripts();
    this.editScript = false;
  }
}
