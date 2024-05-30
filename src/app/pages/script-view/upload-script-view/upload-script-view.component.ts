import { Component } from '@angular/core';
import { IScriptDemo } from '../../../models/script';
import { ScriptService } from '../../../core/services/script.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-upload-script-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SvgEditComponent,
    SgvTrashComponent,
    HttpClientModule,
  ],
  templateUrl: './upload-script-view.component.html',
  styleUrls: ['./upload-script-view.component.css'],
})
export class UploadScriptViewComponent {
  list: any[] = [];
  scriptList: IScriptDemo[] = [];
  scriptForm: FormGroup;
  selectedFile!: File; // Variable to store the selected file

  constructor(
    private fb: FormBuilder,
    private scriptService: ScriptService,
    private http: HttpClient
  ) {
    this.scriptForm = this.fb.group({
      id_prueba: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getScripts();
  }

  onSubmit() {
    if (this.scriptForm.valid) {
      this.scriptService
        .createScript(this.scriptForm.value, this.selectedFile)
        .subscribe((response) => {
          console.log(this.selectedFile);
          console.log(this.scriptForm.value);

          console.log(response);

          this.getScripts();
        });
    }
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
        response.map(
          (item) =>
            (item.prueba_multimedia = `${baseUrl}${item.prueba_multimedia}`)
        );
        this.scriptList = response;
        console.log(this.scriptList);
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

  onClose() {
    // this.onCloseModel.emit(false);
  }

  resetForm() {
    this.scriptForm.reset();
    this.onClose();
  }
}
