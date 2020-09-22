import { MacquarieTodayComponent } from './macquarie-today.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: 'macquarie-today',
    component: MacquarieTodayComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MacquarieTodayModule { }
