import { ApplicationLibraryListComponent } from './../application-library/application-library-list/application-library-list.component';
import { ApplicationLibraryGridComponent } from './../application-library/application-library-grid/application-library-grid.component';
import { ApplicationLibraryComponent } from './../application-library/application-library.component';
import { StaffSummaryListComponent } from './../staff-summary/staff-summary-list/staff-summary-list.component';
import { StaffSummaryGridComponent } from './../staff-summary/staff-summary-grid/staff-summary-grid.component';
import { StaffSummaryComponent } from './../staff-summary/staff-summary.component';
import { StaffOverviewComponent } from './../staff-overview/staff-overview.component';
import { TwopageComponent } from './twopage.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'app',
    component: TwopageComponent,
    children: [
      {
        path: 'staff-overview',
        component: StaffOverviewComponent
      },
      {
        path: 'staff-summary',
        component: StaffSummaryComponent,
        children: [
            {
              path: '',
              component: StaffSummaryGridComponent
            },
            {
              path: 'list',
              component: StaffSummaryListComponent
            }
          ]
       },
       {
        path: 'application-library',
        component: ApplicationLibraryComponent,
        children: [
            {
              path: '',
              component: ApplicationLibraryGridComponent
            },
            {
              path: 'list',
              component: ApplicationLibraryListComponent
            }
          ]
       }
    ]
 }];


@NgModule({
  declarations: [],
  imports:  [RouterModule.forRoot(routes),
    CommonModule],
    exports: [RouterModule]
})
export class TwopageModule { }
