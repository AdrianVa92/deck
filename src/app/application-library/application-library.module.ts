import { ApplicationLibraryComponent } from './application-library.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: 'application-library',
    component: ApplicationLibraryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApplicationLibraryModule { }
