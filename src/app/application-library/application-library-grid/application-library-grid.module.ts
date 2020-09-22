import { ApplicationLibraryGridComponent } from './application-library-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: '',
    component: ApplicationLibraryGridComponent,
    pathMatch: 'application-library',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApplicationLibraryGridModule { }
