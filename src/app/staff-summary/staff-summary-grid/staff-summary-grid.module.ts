import { StaffSummaryGridComponent } from './staff-summary-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: '',
    component: StaffSummaryGridComponent,
    pathMatch: 'staff-summary',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StaffSummaryGridModule { }
