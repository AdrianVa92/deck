import { StaffSummaryListComponent } from './staff-summary-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: 'list',
    component: StaffSummaryListComponent,
    pathMatch: 'staff-summary',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StaffSummaryListModule { }
