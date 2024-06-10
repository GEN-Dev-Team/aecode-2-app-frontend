import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../../../core/services/software.service';
import { ISoftware } from '../../../models/software';
import { ButtonComponent } from '../../../components/button/button.component';
import { SoftwareFormComponent } from './software-form/software-form.component';
import { ModelComponent } from '../../../components/model/model.component';
import { SvgEditComponent } from '../../../components/icons/svg-edit/svg-edit.component';
import { SgvTrashComponent } from '../../../components/icons/sgv-trash/sgv-trash.component';

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [
    ButtonComponent,
    SoftwareFormComponent,
    ModelComponent,
    SvgEditComponent,
    SgvTrashComponent,
  ],
  templateUrl: './software.component.html',
  styleUrl: './software.component.css',
})
export class SoftwareComponent implements OnInit {
  isModelOpen = false;
  softwareList: ISoftware[] = [];
  software!: ISoftware;

  constructor(private softwareService: SoftwareService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllSoftwares();
  }

  loadSoftware(softwareData: ISoftware) {
    this.software = softwareData;
    this.openModel();
  }

  getAllSoftwares() {
    this.softwareService.getAllSoftwares().subscribe((response) => {
      const baseUrl = 'https://aecode.onrender.com';
      response.map(
        (item) => (item.software_imagen = `${baseUrl}${item.software_imagen}`)
      );

      this.softwareList = response;
    });
  }

  deleteSoftware(id: number) {
    this.softwareService.deleteSoftware(id).subscribe((response) => {
      console.log('software deleted successfully!');
    });
  }

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.getAllSoftwares();
  }
}
