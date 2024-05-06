export interface FilterGroup {
  filterGroupCategory: string;
  filterGroupElements: FilterItem[];
}

export interface FilterItem {
  filterItemName: string;
  filterItemchecked?: boolean;
  filterItemImgPath: string;
}
