import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginatorComponent} from './paginator/paginator.component';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PaginatorComponent,
    NavigationComponent,
  ],
  exports: [
    PaginatorComponent,
    NavigationComponent,
  ],
  providers: [ ],

})
export class SharedModule {}
