import { Component } from '@angular/core';
import { AsideFilterItemComponent } from './aside-filter-item/aside-filter-item.component';
import { FilterGroup, FilterItem } from './aside-filter-item';

@Component({
  selector: 'app-aside-filter',
  standalone: true,
  imports: [AsideFilterItemComponent],
  templateUrl: './aside-filter.component.html',
  styleUrl: './aside-filter.component.css',
})
export class AsideFilterComponent {
  languagesList: FilterGroup = {
    filterGroupCategory: 'Lenguajes',
    filterGroupElements: [
      {
        filterItemId: 1,
        filterItemName: 'Python',
        filterItemchecked: false,
      },
      {
        filterItemId: 2,
        filterItemName: 'C#',
        filterItemchecked: false,
      },
      {
        filterItemId: 3,
        filterItemName: 'Dynamo',
        filterItemchecked: false,
      },
      {
        filterItemId: 4,
        filterItemName: 'Visual Basic',
        filterItemchecked: false,
      },
      {
        filterItemId: 5,
        filterItemName: 'Grasshopper',
        filterItemchecked: false,
      },
      {
        filterItemId: 6,
        filterItemName: 'R',
        filterItemchecked: false,
      },
      {
        filterItemId: 7,
        filterItemName: 'C++',
        filterItemchecked: false,
      },
      {
        filterItemId: 8,
        filterItemName: 'JavaScript',
        filterItemchecked: false,
      },
    ],
  };

  softwaresList: FilterGroup = {
    filterGroupCategory: 'Softwares',
    filterGroupElements: [
      {
        filterItemId: 1,
        filterItemName: 'MATHCAD',
        filterItemchecked: false,
      },
      {
        filterItemId: 2,
        filterItemName: 'ETABS',
        filterItemchecked: false,
      },
      {
        filterItemId: 3,
        filterItemName: 'SAP2000',
        filterItemchecked: false,
      },
      {
        filterItemId: 4,
        filterItemName: 'CSI Bridge',
        filterItemchecked: false,
      },
      {
        filterItemId: 5,
        filterItemName: 'SAFE',
        filterItemchecked: false,
      },
      {
        filterItemId: 6,
        filterItemName: 'REVIT',
        filterItemchecked: false,
      },
      {
        filterItemId: 7,
        filterItemName: 'AutoCAD',
        filterItemchecked: false,
      },
      {
        filterItemId: 8,
        filterItemName: 'Civil 3D',
        filterItemchecked: false,
      },
      {
        filterItemId: 9,
        filterItemName: 'RhinoCeros',
        filterItemchecked: false,
      },
      {
        filterItemId: 10,
        filterItemName: 'TEKLA',
        filterItemchecked: false,
      },
      {
        filterItemId: 11,
        filterItemName: 'SketchUp',
        filterItemchecked: false,
      },
      {
        filterItemId: 12,
        filterItemName: 'RFEM',
        filterItemchecked: false,
      },
      {
        filterItemId: 13,
        filterItemName: 'Sofistik',
        filterItemchecked: false,
      },
      {
        filterItemId: 14,
        filterItemName: 'Karamba 3D',
        filterItemchecked: false,
      },
      {
        filterItemId: 15,
        filterItemName: 'Advance Steel',
        filterItemchecked: false,
      },
    ],
  };

  tagsList: FilterGroup = {
    filterGroupCategory: 'Etiquetas',
    filterGroupElements: [
      {
        filterItemId: 1,
        filterItemName: 'Diseño paramétrico',
        filterItemchecked: false,
      },
      {
        filterItemId: 2,
        filterItemName: 'Diseño generativo',
        filterItemchecked: false,
      },
      {
        filterItemId: 3,
        filterItemName: 'Modelado 2D automatizado',
        filterItemchecked: false,
      },
      {
        filterItemId: 4,
        filterItemName: 'Modelado 3D automatizado',
        filterItemchecked: false,
      },
      {
        filterItemId: 5,
        filterItemName: 'Inteligencia artificial',
        filterItemchecked: false,
      },
      {
        filterItemId: 6,
        filterItemName: 'Estructuras',
        filterItemchecked: false,
      },
      {
        filterItemId: 7,
        filterItemName: 'Construcción',
        filterItemchecked: false,
      },
      {
        filterItemId: 8,
        filterItemName: 'Geotecnia',
        filterItemchecked: false,
      },
      {
        filterItemId: 9,
        filterItemName: 'Hidráulica',
        filterItemchecked: false,
      },
      {
        filterItemId: 10,
        filterItemName: 'Vialidad',
        filterItemchecked: false,
      },
      {
        filterItemId: 11,
        filterItemName: 'Virtual Design and Construction (VDC)',
        filterItemchecked: false,
      },
      {
        filterItemId: 12,
        filterItemName: 'Building Information Modeling (BIM)',
        filterItemchecked: false,
      },
    ],
  };
}
