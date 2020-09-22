import { StaffOverviewComponent } from './staff-overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  {
    path: 'staff-overview',
    component: StaffOverviewComponent,
    pathMatch: 'full',
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StaffOverviewModule { }
