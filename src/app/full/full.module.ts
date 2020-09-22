import { StaffOverviewComponent } from './../staff-overview/staff-overview.component';
import { MacquarieTodayComponent } from './../macquarie-today/macquarie-today.component';
import { LandingComponent } from './../landing/landing.component';
import { FullComponent } from './full.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    component: FullComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'macquarie-today',
        component: MacquarieTodayComponent
      },
      {
        path: 'staff-overview',
        component: StaffOverviewComponent
      }
    ]
 }];



@NgModule({
  declarations: [
    FullComponent
  ],
  imports:
   [RouterModule.forRoot(routes),
   CommonModule],
   exports: [RouterModule]
})
export class FullModule { }
