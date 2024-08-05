import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ScriptService } from '../../../../core/services/script.service';
import { HttpClient } from '@angular/common/http';
import { IScript } from '../../../../models/script';
import { ButtonComponent } from '../../../../components/button/button.component';
import { SvgCaretDownComponent } from '../../../../components/icons/svg-caret-down/svg-caret-down.component';
import { SvgSaveScriptComponent } from '../../../../components/icons/svg-save-script/svg-save-script.component';
import { SvgAddScriptComponent } from '../../../../components/icons/svg-add-script/svg-add-script.component';
import { SvgFileComponent } from '../../../../components/icons/svg-file/svg-file.component';
import { SvgCloseModelComponent } from '../../../../components/icons/svg-close-model/svg-close-model.component';
import { ISoftware } from '../../../../models/software';
import { IPLanguage } from '../../../../models/programmingLanguage';
import { ITag } from '../../../../models/tags';
import { ICurrency } from '../../../../models/currency';
import { SoftwareService } from '../../../../core/services/software.service';
import { ProgrammingLanguageService } from '../../../../core/services/programming-language.service';
import { TagsService } from '../../../../core/services/tags.service';
import { CurrencyService } from '../../../../core/services/currency.service';
import { IPlan } from '../../../../models/plan';
import { PlanService } from '../../../../core/services/plan.service';
import { PillContainerComponent } from './pill-container/pill-container.component';

@Component({
  selector: 'app-script-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    SvgCaretDownComponent,
    SvgSaveScriptComponent,
    SvgAddScriptComponent,
    SvgFileComponent,
    SvgCloseModelComponent,
    PillContainerComponent,
  ],
  templateUrl: './script-form.component.html',
  styleUrl: './script-form.component.css',
})
export class ScriptFormComponent {
  @Output() onCloseModel = new EventEmitter<boolean>();
  @Input() data: IScript | null = null;
  @Input() editUser!: boolean;

  isDropdownProgLangActive = false;
  isDropdownSoftwareActive = false;
  isDropdownTagActive = false;
  isDropdownCurrencyActive = false;

  scriptList: IScript[] = [];
  softwareList: ISoftware[] = [];
  proLangList: IPLanguage[] = [];
  tagList: ITag[] = [];
  currencyList: ICurrency[] = [];
  planList: IPlan[] = [];

  Software!: ISoftware;
  ProLang!: IPLanguage;
  Tag!: ITag;
  Currency!: ICurrency;
  Plan!: IPlan;
  Script!: IScript;

  proglangListSelected: IPLanguage[] = [];
  softwareListSelected: ISoftware[] = [];
  tagListSelected: ITag[] = [];
  multimediaListSelected: File[] = [];

  scriptForm: FormGroup;
  selectedFiles!: File[]; // Variable to store the selected file
  selectedMiniature!: File; // Variable to store the selected file
  fileTreeStructure: any = {};

  constructor(
    private fb: FormBuilder,
    private scriptService: ScriptService,
    private softwareService: SoftwareService,
    private progLangService: ProgrammingLanguageService,
    private tagService: TagsService,
    private planService: PlanService,
    private currencyService: CurrencyService,
    private http: HttpClient
  ) {
    this.scriptForm = this.fb.group({
      profile: new FormControl(
        JSON.parse(localStorage.getItem('User Logged')!),
        [Validators.required]
      ),
      software: new FormControl('', [Validators.required]),
      proglang: new FormControl('', [Validators.required]),
      tag: new FormControl('', [Validators.required]),
      currency: new FormControl('', [Validators.required]),
      plan: new FormControl('', [Validators.required]),
      script_name: new FormControl('', [Validators.required]),
      script_description: new FormControl(''),
      script_price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getSoftwares();
    this.getProgLangs();
    this.getTags();
    this.getCurrencys();
    this.getPlans();
  }

  onSubmit() {
    this.scriptForm.patchValue({
      software: this.softwareListSelected,
      proglang: this.proglangListSelected,
      tag: this.tagListSelected,
      currency: this.Currency,
      plan: this.Plan,
    });

    if (this.scriptForm.valid) {
      console.log(this.multimediaListSelected),
        console.log(this.selectedFiles),
        console.log(this.scriptForm.value),
        this.scriptService
          .createScript(
            this.multimediaListSelected,
            this.selectedFiles,
            this.scriptForm.value
          )
          .subscribe((response) => {
            console.log(response);
          });
      this.getScripts();
    } else {
      console.log("Form isn't valid:", this.scriptForm.value);
      this.scriptForm.markAllAsTouched();
    }
  }

  onFileScriptChange(event: any) {
    const selectedFilesList = event.target.files; // FileList
    this.selectedFiles = Array.from(selectedFilesList); // Convertir FileList a Array<File>

    // Organizar los archivos en una estructura de árbol
    this.fileTreeStructure = this.organizeFiles(this.selectedFiles);

    // Mostrar la estructura completa del árbol en la consola
    console.log('Estructura de árbol completa:', this.fileTreeStructure);
  }

  // Organiza los archivos en una estructura de carpetas
  organizeFiles(files: File[]): any {
    const fileTree: any = {};

    files.forEach((file) => {
      const path = file.webkitRelativePath.split('/');

      let currentLevel = fileTree;

      path.forEach((part, index) => {
        if (!currentLevel[part]) {
          currentLevel[part] = index === path.length - 1 ? file : {};
        }
        currentLevel = currentLevel[part];
      });
    });

    return fileTree;
  }

  onFileMiniatureChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedMiniature = event.target.files[0];
      this.multimediaListSelected.push(this.selectedMiniature);
      console.log('Lista de multimedias:', this.multimediaListSelected);
    }
  }

  getScripts() {
    this.scriptService.getAllScripts().subscribe({
      next: (response) => {
        const baseUrl = 'https://aecode.onrender.com';
        response.map(
          (item) => (
            (item.script_file = `${baseUrl}${item.script_file}`),
            item.script_multimedia.map((item) => (item = `${baseUrl}${item}`))
          )
        );
        this.scriptList = response;
      },
    });
  }

  getSoftwares() {
    this.softwareService.getAllSoftwares().subscribe({
      next: (response) => {
        this.softwareList = response;
      },
    });
  }

  getProgLangs() {
    this.progLangService.getAllProgLangs().subscribe({
      next: (response) => {
        this.proLangList = response;
      },
    });
  }

  getTags() {
    this.tagService.getAllTags().subscribe({
      next: (response) => {
        this.tagList = response;
      },
    });
  }

  getCurrencys() {
    this.currencyService.getAllCurrencies().subscribe({
      next: (response) => {
        this.currencyList = response;
      },
    });
  }

  getPlans() {
    this.planService.getAllPlans().subscribe({
      next: (response) => {
        this.planList = response;
      },
    });
  }

  onPlanChange(event: any) {
    this.getPlan(event.target.value);

    // Obtener todos los botones que pueden tener el estado "selected"
    const allButtons = document.querySelectorAll('[id^="buttonSelected"]');

    // Desactivar el estado "selected" en todos los botones
    allButtons.forEach((button) => {
      button.setAttribute('selected', 'false');
      button.classList.remove('bg-main-purple', 'text-white');
    });

    // Activar el estado "selected" en el botón seleccionado
    const buttonSelected = document.getElementById(
      'buttonSelected' + event.target.value
    );

    console.log(buttonSelected);

    if (buttonSelected) {
      buttonSelected.classList.add('bg-main-purple', 'text-white');
      buttonSelected.setAttribute('selected', 'true');
    }

    console.log(buttonSelected);
  }

  getPlan(id: number) {
    this.planService.getPlan(id).subscribe({
      next: (response) => {
        this.Plan = response;
        console.log(this.Plan);
      },
      // next: (response) => {
      //   this.Plan = response;
      //   console.log(this.Plan);
      // },
    });
  }

  onSoftwareChange(event: any) {
    let id_selected = Number(event.target.value);

    if (
      this.softwareListSelected.length === 0 ||
      !this.softwareListSelected.some(
        (item) => item.id_software === id_selected
      )
    ) {
      this.pushSoftware(id_selected);
    }
  }

  pushSoftware(id: number) {
    this.softwareService.getSoftware(id).subscribe({
      next: (response) => {
        this.Software = response;
        console.log('Get:', this.Software);

        this.softwareListSelected.push(this.Software);
        console.log('List:', this.softwareListSelected);
      },
    });
  }

  onProgLangChange(event: any) {
    let id_selected = Number(event.target.value);

    if (
      this.proglangListSelected.length === 0 ||
      !this.proglangListSelected.some(
        (item) => item.id_proglang === id_selected
      )
    ) {
      this.pushProgLang(id_selected);
    }
  }

  pushProgLang(id: number) {
    this.progLangService.getProgLang(id).subscribe({
      next: (response) => {
        this.ProLang = response;
        console.log('Get:', this.ProLang);

        this.proglangListSelected.push(this.ProLang);
        console.log('List:', this.proglangListSelected);
      },
    });
  }

  onCurrencyChange(event: any) {
    let id_selected = Number(event.target.value);

    this.pushCurrency(id_selected);
  }

  pushCurrency(id: number) {
    this.currencyService.getCurrency(id).subscribe({
      next: (response) => {
        this.Currency = response;
        console.log('Get:', this.Currency);
      },
    });
  }

  onTagChange(event: any) {
    let id_selected = Number(event.target.value);

    if (
      this.tagListSelected.length === 0 ||
      !this.tagListSelected.some((item) => item.id_tag === id_selected)
    ) {
      this.pushTag(id_selected);
    }
  }

  pushTag(id: number) {
    this.tagService.getTag(id).subscribe({
      next: (response) => {
        this.Tag = response;
        console.log('Get:', this.Tag);

        this.tagListSelected.push(this.Tag);
        console.log('List:', this.tagListSelected);
      },
    });
  }

  showDropDownLangProg() {
    this.isDropdownProgLangActive = !this.isDropdownProgLangActive;
  }

  showDropDownSoftware() {
    this.isDropdownSoftwareActive = !this.isDropdownSoftwareActive;
  }

  showDropDownTag() {
    this.isDropdownTagActive = !this.isDropdownTagActive;
  }

  showDropDownCurrency() {
    this.isDropdownCurrencyActive = !this.isDropdownCurrencyActive;
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  resetForm() {
    this.scriptForm.reset();
    this.onClose();
  }
}
