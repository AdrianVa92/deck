import { ApplicationLibraryListComponent } from './../application-library/application-library-list/application-library-list.component';
import { ApplicationLibraryGridComponent } from './../application-library/application-library-grid/application-library-grid.component';
import { StaffSummaryListComponent } from './../staff-summary/staff-summary-list/staff-summary-list.component';
import { StaffSummaryGridComponent } from './../staff-summary/staff-summary-grid/staff-summary-grid.component';
import { StaffSummaryComponent } from './../staff-summary/staff-summary.component';
import { StaffOverviewComponent } from './../staff-overview/staff-overview.component';
import { MacquarieTodayComponent } from './../macquarie-today/macquarie-today.component';
import { LandingComponent } from './../landing/landing.component';
import { FullComponent } from './full.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationLibraryComponent } from '../application-library/application-library.component';

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
    FullComponent,
  ],
  imports:
   [RouterModule.forRoot(routes),
   CommonModule],
   exports: [RouterModule]
})
export class FullModule { }
