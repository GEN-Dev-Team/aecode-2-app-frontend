import { Component, Input } from '@angular/core';
import { FilterItem } from '../model';

@Component({
  selector: 'app-filter-item',
  standalone: true,
  imports: [],
  templateUrl: './filter-item.component.html',
  styleUrl: './filter-item.component.css',
})
export class FilterItemComponent {
  @Input() filterItem!: FilterItem;
}
