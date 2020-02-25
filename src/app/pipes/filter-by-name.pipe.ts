import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(namesArray: string[], nameFilter: string): any {
    const lowercaseFilter = nameFilter.trim().toLowerCase();
    return namesArray.filter(name => name.toLowerCase().includes(lowercaseFilter));
  }

}
