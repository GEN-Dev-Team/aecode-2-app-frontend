import { Component } from '@angular/core';
import { IScript } from '../../../models/script';
import { ScriptService } from '../../../core/services/script.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from '../../../components/model/model.component';
import { ScriptFormComponent } from './script-form/script-form.component';

@Component({
  selector: 'app-upload-script-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SvgEditComponent,
    SgvTrashComponent,
    HttpClientModule,
    ModelComponent,
    ScriptFormComponent,
  ],
  templateUrl: './upload-script-view.component.html',
  styleUrls: ['./upload-script-view.component.css'],
})
export class UploadScriptViewComponent {
  scriptList: IScript[] = [];
  selectedFile!: File; // Variable to store the selected file
  isModelOpen = false;

  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.getScripts();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  getScripts() {
    this.scriptService.getAllScripts().subscribe({
      next: (response) => {
        const baseUrl = 'https://aecode.onrender.com';

        response.forEach((item) => {
          // Concatenar baseUrl a script_file
          item.script_file = `${baseUrl}${item.script_file}`;

          // Concatenar baseUrl a cada elemento en script_multimedia
          item.script_multimedia = item.script_multimedia.map(
            (multimediaItem) => `${baseUrl}${multimediaItem}`
          );
        });

        this.scriptList = response;
        console.log('Server response: ', response);
        console.log('Scriptlist:', this.scriptList);
      },
    });
  }

  getScript(id: number) {
    this.scriptService.getScript(id).subscribe({
      next: (response) => {
        // this.Role = response;
      },
    });
  }
}
