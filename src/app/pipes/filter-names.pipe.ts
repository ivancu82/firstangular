import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterNames' })
export class FilterNamesPipe implements PipeTransform {
  transform(allNames: string[], filter: string = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredNameList: string[] = allNames.filter((name: string) => {
      return name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredNameList;
  }
}
