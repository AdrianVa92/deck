import { TwopageModule } from './twopage/twopage.module';
import { LandingModule } from './landing/landing.module';
import { LandingComponent } from './landing/landing.component';
import { FullModule } from './full/full.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MacquarieTodayComponent } from './macquarie-today/macquarie-today.component';
import { StaffOverviewComponent } from './staff-overview/staff-overview.component';
import { StaffSummaryComponent } from './staff-summary/staff-summary.component';
import { StaffSummaryGridComponent } from './staff-summary/staff-summary-grid/staff-summary-grid.component';
import { StaffSummaryListComponent } from './staff-summary/staff-summary-list/staff-summary-list.component';
import { ApplicationLibraryComponent } from './application-library/application-library.component';
import { ApplicationLibraryListComponent } from './application-library/application-library-list/application-library-list.component';
import { ApplicationLibraryGridComponent } from './application-library/application-library-grid/application-library-grid.component';
import { TwopageComponent } from './twopage/twopage.component';

@NgModule({
  declarations: [
    AppComponent,
    MacquarieTodayComponent,
    StaffOverviewComponent,
    StaffSummaryComponent,
    StaffSummaryGridComponent,
    StaffSummaryListComponent,
    ApplicationLibraryComponent,
    ApplicationLibraryListComponent,
    ApplicationLibraryGridComponent,
    TwopageComponent,
  ],
  imports: [
    BrowserModule,
    FullModule,
    TwopageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
