import { Component, Input } from '@angular/core';
import { SvgCloseModelComponent } from '../../../../../components/icons/svg-close-model/svg-close-model.component';
import { IPLanguage } from '../../../../../models/programmingLanguage';
import { ISoftware } from '../../../../../models/software';
import { ICurrency } from '../../../../../models/currency';
import { ITag } from '../../../../../models/tags';

@Component({
  selector: 'app-pill-container',
  standalone: true,
  imports: [SvgCloseModelComponent],
  templateUrl: './pill-container.component.html',
  styleUrl: './pill-container.component.css',
})
export class PillContainerComponent {
  @Input() ProgLang!: IPLanguage;
  @Input() Software!: ISoftware;
  @Input() Currency!: ICurrency;
  @Input() Tag!: ITag;
  @Input() square: boolean = false;
}
