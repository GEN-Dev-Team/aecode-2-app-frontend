import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { FilterGroup, FilterItem } from './model';

@Component({
  selector: 'app-aside-filter-item',
  standalone: true,
  imports: [FilterItemComponent],
  templateUrl: './aside-filter-item.component.html',
  styleUrl: './aside-filter-item.component.css',
})
export class AsideFilterItemComponent {
  @Input() filterGroup!: FilterGroup;
  @Output() filterSelected = new EventEmitter<FilterItem>();

  filterItemSelected(item: FilterItem) {
    item.filterItemchecked = !item.filterItemchecked;
    this.filterSelected.emit(item);
  }
}
