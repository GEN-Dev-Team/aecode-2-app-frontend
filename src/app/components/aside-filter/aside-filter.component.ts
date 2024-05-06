import { Component } from '@angular/core';
import { AsideFilterItemComponent } from './aside-filter-item/aside-filter-item.component';

@Component({
  selector: 'app-aside-filter',
  standalone: true,
  imports: [AsideFilterItemComponent],
  templateUrl: './aside-filter.component.html',
  styleUrl: './aside-filter.component.css',
})
export class AsideFilterComponent {}
