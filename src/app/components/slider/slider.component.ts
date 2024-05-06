import { Component } from '@angular/core';
import { SliderElementComponent } from './slider-element/slider-element.component';
import { SliderElement } from './models';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SliderElementComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  sliderSoftwareList: SliderElement[] = [
    {
      description: 'Logo de Sofistik',
      imgPath: 'assets/slider-images/sofistik-logo.png',
    },
    {
      description: 'Logo de RFEM',
      imgPath: 'assets/slider-images/rfem-logo.png',
    },
    {
      description: 'Logo de Dynamo',
      imgPath: 'assets/slider-images/dynamo-logo.png',
    },
    {
      description: 'Logo de Revit',
      imgPath: 'assets/slider-images/revit-logo.png',
    },
    {
      description: 'Logo de Navis',
      imgPath: 'assets/slider-images/naviswork-logo.png',
    },
    {
      description: 'Logo de Python',
      imgPath: 'assets/slider-images/python-logo.png',
    },
    {
      description: 'Logo de Bentley Syncrho',
      imgPath: 'assets/slider-images/syncrho4d-logo.png',
    },
    {
      description: 'Logo de SMath Solver y SMath Writer',
      imgPath: 'assets/slider-images/smathsolver-smathwriter-logo.png',
    },
    {
      description: 'Logo de Sofistik',
      imgPath: 'assets/slider-images/sofistik-logo.png',
    },
    {
      description: 'Logo de RFEM',
      imgPath: 'assets/slider-images/rfem-logo.png',
    },
    {
      description: 'Logo de Dynamo',
      imgPath: 'assets/slider-images/dynamo-logo.png',
    },
    {
      description: 'Logo de Revit',
      imgPath: 'assets/slider-images/revit-logo.png',
    },
    {
      description: 'Logo de Navis',
      imgPath: 'assets/slider-images/naviswork-logo.png',
    },
  ];

  sliderLanguagesList: SliderElement[] = [
    {
      description: 'Logo de C#',
      imgPath: 'assets/slider-images/csharp-logo.png',
    },
    {
      description: 'Logo de Java',
      imgPath: 'assets/slider-images/java-logo.png',
    },
    {
      description: 'Logo de Trimble Connect',
      imgPath: 'assets/slider-images/trimbleconnect-logo.png',
    },
    {
      description: 'Logo de Grasshoper',
      imgPath: 'assets/slider-images/grasshoper-logo.png',
    },
    {
      description: 'Logo de Rhinoceros',
      imgPath: 'assets/slider-images/rhinoceros-logo.png',
    },
    {
      description: 'Logo de Tekla',
      imgPath: 'assets/slider-images/tekla-logo.png',
    },
    {
      description: 'Logo de MathCAD',
      imgPath: 'assets/slider-images/mathcad-logo.png',
    },
    {
      description: 'Logo de RM Bridge',
      imgPath: 'assets/slider-images/rmbridge-logo.png',
    },
    {
      description: 'Logo de CSI ETABS',
      imgPath: 'assets/slider-images/etabs-logo.png',
    },
    {
      description: 'Logo de SAP2000',
      imgPath: 'assets/slider-images/sap2000-logo.png',
    },
    {
      description: 'Logo de CSI Bridge',
      imgPath: 'assets/slider-images/csibridge-logo.png',
    },
    {
      description: 'Logo de C#',
      imgPath: 'assets/slider-images/csharp-logo.png',
    },
    {
      description: 'Logo de Java',
      imgPath: 'assets/slider-images/java-logo.png',
    },
  ];

  sliderText: SliderElement[] = [
    {
      description: 'BIM Automation',
    },
    {
      description: 'Structural Automation',
    },
    {
      description: 'Parametric Design',
    },
    {
      description: 'Virtual construction',
    },
    {
      description: 'AI Implementation',
    },
    {
      description: 'BIM Automation',
    },
    {
      description: 'Structural Automation',
    },
    {
      description: 'Parametric Design',
    },
    {
      description: 'Virtual construction',
    },
    {
      description: 'AI Implementation',
    },
  ];
}
