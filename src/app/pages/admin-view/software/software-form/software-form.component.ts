import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISoftware } from '../../../../models/software';
import { SoftwareService } from '../../../../core/services/software.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-software-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './software-form.component.html',
  styleUrl: './software-form.component.css',
})
export class SoftwareFormComponent {
  @Output() onCloseModel = new EventEmitter<boolean>();
  @Input() data: ISoftware | null = null;
  softwareList: ISoftware[] = [];
  software!: ISoftware;
  softwareForm: FormGroup;
  selectedSoftware!: File;

  constructor(
    private fb: FormBuilder,
    private softwareService: SoftwareService
  ) {
    this.softwareForm = this.fb.group({
      id_software: new FormControl(0, [Validators.required]),
      software_name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getSoftwares();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.softwareForm.patchValue({
        id_software: this.data.id_software,
        software_name: this.data.software_name,
      });
    }
  }

  onSubmit() {
    if (this.softwareForm.valid) {
      if (this.data) {
        this.softwareService.updateSoftware(this.softwareForm.value).subscribe({
          next: (response) => {
            this.resetForm();
            console.log('Software updated successfully!');
          },
        });
      } else {
        this.softwareService
          .createSoftware(this.selectedSoftware, this.softwareForm.value)
          .subscribe({
            next: (response) => {
              this.resetForm();
              console.log('Software created successfully!');
            },
          });
      }
    } else {
      this.softwareForm.markAllAsTouched();
    }
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedSoftware = event.target.files[0];
      console.log(this.selectedSoftware);
    }
  }

  getSoftwares() {
    this.softwareService.getAllSoftwares().subscribe({
      next: (response) => {
        const baseUrl = 'https://aecode.onrender.com';
        response.map(
          (item) => (item.software_imagen = `${baseUrl}${item.software_imagen}`)
        );

        this.softwareList = response;
      },
    });
  }

  getSoftware(id: number) {
    this.softwareService.getSoftware(id).subscribe({
      next: (response) => {
        this.software = response;
      },
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  resetForm() {
    this.softwareForm.reset();
    this.onClose();
  }
}
