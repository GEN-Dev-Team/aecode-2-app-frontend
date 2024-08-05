import { Component, Input, OnInit } from '@angular/core';
import { IScript } from '../../../models/script';
import { ScriptService } from '../../../core/services/script.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PillContainerComponent } from './pill-container/pill-container.component';
import { MultimediaCarouselComponent } from './multimedia-carousel/multimedia-carousel.component';
import { SvgCheckComponent } from './icons/svg-check/svg-check.component';

@Component({
  selector: 'app-script-details',
  standalone: true,
  imports: [
    PillContainerComponent,
    MultimediaCarouselComponent,
    SvgCheckComponent,
  ],
  templateUrl: './script-details.component.html',
  styleUrl: './script-details.component.css',
})
export class ScriptDetailsComponent implements OnInit {
  @Input() script!: IScript;

  constructor(
    private scriptService: ScriptService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
