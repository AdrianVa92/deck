import { ApplicationLibraryListComponent } from './application-library-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: 'list',
    component: ApplicationLibraryListComponent,
    pathMatch: 'application-library',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApplicationLibraryListModule { }
