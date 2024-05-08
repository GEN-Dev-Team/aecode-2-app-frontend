export interface FilterGroup {
  filterGroupCategory: string;
  filterGroupElements: FilterItem[];
}

export interface FilterItem {
  filterItemId?: number;
  filterItemName: string;
  filterItemchecked?: boolean;
}
