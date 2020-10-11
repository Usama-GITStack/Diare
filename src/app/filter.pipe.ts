import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.CustomerCode.toLowerCase().includes(searchText);
    });
  }
  transform1(items: any[], searchText1: string): any[] {
    if (!items) return [];
    if (!searchText1) return items;
    searchText1 = searchText1.toLowerCase();
    return items.filter(it => {
      return it.CustomerCode.toLowerCase().includes(searchText1);
    });
  }
  transform2(items: any[], searchText2: string): any[] {
    if (!items) return [];
    if (!searchText2) return items;
    searchText2 = searchText2.toLowerCase();
    return items.filter(it => {
      return it.Category.toLowerCase().includes(searchText2);
    });
  }
}
