import { Component, OnInit } from '@angular/core';
import { IPLanguage } from '../../../models/programmingLanguage';
import { ProgrammingLanguageService } from '../../../core/services/programming-language.service';
import { ProgLanguageFormComponent } from './prog-language-form/prog-language-form.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';
import { ModelComponent } from '../../../components/model/model.component';

@Component({
  selector: 'app-prog-language',
  standalone: true,
  imports: [
    ProgLanguageFormComponent,
    ButtonComponent,
    SvgEditComponent,
    SgvTrashComponent,
    ModelComponent,
  ],
  templateUrl: './prog-language.component.html',
  styleUrl: './prog-language.component.css',
})
export class ProgLanguageComponent implements OnInit {
  isModelOpen = false;
  progLanguageList: IPLanguage[] = [];
  progLanguage!: IPLanguage;

  constructor(private progLanguageService: ProgrammingLanguageService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProgLanguages();
  }

  loadProgLanguage(progLanguageData: IPLanguage) {
    this.progLanguage = progLanguageData;
    this.openModel();
  }

  getAllProgLanguages() {
    this.progLanguageService.getAllProgLangs().subscribe((response) => {
      const baseUrl = 'https://aecode.onrender.com';
      response.map(
        (item) => (item.progLang_imagen = `${baseUrl}${item.progLang_imagen}`)
      );

      this.progLanguageList = response;
    });
  }

  deleteProgLanguage(id: number) {
    this.progLanguageService.deleteProgLang(id).subscribe((response) => {
      console.log('ProgLanguage deleted successfully!');
    });
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllProgLanguages();
  }
}
