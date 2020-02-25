import { NgModule } from '@angular/core';
import { FilterNamesPipe } from './pipes/filter-names.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';

@NgModule({
  imports: [],
  declarations: [
    FilterNamesPipe,
    FilterByNamePipe,
  ],
  exports: [
    FilterNamesPipe,
    FilterByNamePipe,
  ]
})
export class AppPipesModule { }
