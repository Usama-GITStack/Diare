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
      return it.Email.toLowerCase().includes(searchText);
    });
  }
  transform1(items: any[], searchText1: string): any[] {
    if (!items) return [];
    if (!searchText1) return items;
    searchText1 = searchText1.toLowerCase();
    return items.filter(it => {
      return it.Email.toLowerCase().includes(searchText1);
    });
  }
}
