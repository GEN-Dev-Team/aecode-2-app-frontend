import { Component, Input } from '@angular/core';
import { IPLanguage } from '../../../../models/programmingLanguage';
import { ISoftware } from '../../../../models/software';

@Component({
  selector: 'app-pill-container',
  standalone: true,
  imports: [],
  templateUrl: './pill-container.component.html',
  styleUrl: './pill-container.component.css',
})
export class PillContainerComponent {
  @Input() ProgLang!: IPLanguage;
  @Input() Software!: ISoftware;
}
