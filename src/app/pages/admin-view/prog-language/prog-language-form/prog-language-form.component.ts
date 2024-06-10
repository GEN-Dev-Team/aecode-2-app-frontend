import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPLanguage } from '../../../../models/programmingLanguage';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProgrammingLanguageService } from '../../../../core/services/programming-language.service';

@Component({
  selector: 'app-prog-language-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './prog-language-form.component.html',
  styleUrl: './prog-language-form.component.css',
})
export class ProgLanguageFormComponent {
  @Output() onCloseModel = new EventEmitter<boolean>();
  @Input() data: IPLanguage | null = null;
  progLanguageList: IPLanguage[] = [];
  PLanguage!: IPLanguage;
  progLanguageForm: FormGroup;
  proglangSelected!: File;

  constructor(
    private fb: FormBuilder,
    private progLanguangeService: ProgrammingLanguageService
  ) {
    this.progLanguageForm = this.fb.group({
      id_proglang: new FormControl(0, [Validators.required]),
      proglang_name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getProgLanguages();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.progLanguageForm.patchValue({
        id_proglang: this.data.id_proglang,
        proglang_name: this.data.proglang_name,
      });
    }
  }

  onSubmit() {
    console.log(this.progLanguageForm.value);
    if (this.progLanguageForm.valid) {
      if (this.data) {
        this.progLanguangeService
          .updateProgLang(this.progLanguageForm.value)
          .subscribe({
            next: (response) => {
              this.resetForm();
              console.log('ProgLanguage updated successfully!');
            },
          });
      } else {
        this.progLanguangeService
          .createProgLang(this.proglangSelected, this.progLanguageForm.value)
          .subscribe({
            next: (response) => {
              this.resetForm();
              console.log('ProgLanguage created successfully!');
            },
          });
      }
    } else {
      this.progLanguageForm.markAllAsTouched();
    }
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      this.proglangSelected = event.target.files[0];
      console.log(this.proglangSelected);
    }
  }

  getProgLanguages() {
    this.progLanguangeService.getAllProgLangs().subscribe({
      next: (response) => {
        const baseUrl = 'https://aecode.onrender.com';
        response.map(
          (item) => (item.progLang_imagen = `${baseUrl}${item.progLang_imagen}`)
        );

        this.progLanguageList = response;
      },
    });
  }

  getProgLanguage(id: number) {
    this.progLanguangeService.getProgLang(id).subscribe({
      next: (response) => {
        this.PLanguage = response;
      },
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  resetForm() {
    this.progLanguageForm.reset();
    this.onClose();
  }
}
