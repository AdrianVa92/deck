import { StaffSummaryComponent } from './staff-summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: 'staff-summary',
    component: StaffSummaryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StaffSummaryModule { }
