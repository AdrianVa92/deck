"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var header_component_1 = require("./shared/header/header.component");
var sidebar_component_1 = require("./shared/sidebar/sidebar.component");
var inner_footer_component_1 = require("./shared/inner-footer/inner-footer.component");
var footer_component_1 = require("./shared/footer/footer.component");
var banner_component_1 = require("./shared/banner/banner.component");
var twopage_module_1 = require("./twopage/twopage.module");
var landing_component_1 = require("./landing/landing.component");
var full_module_1 = require("./full/full.module");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var macquarie_today_component_1 = require("./macquarie-today/macquarie-today.component");
var staff_overview_component_1 = require("./staff-overview/staff-overview.component");
var staff_summary_component_1 = require("./staff-summary/staff-summary.component");
var staff_summary_grid_component_1 = require("./staff-summary/staff-summary-grid/staff-summary-grid.component");
var staff_summary_list_component_1 = require("./staff-summary/staff-summary-list/staff-summary-list.component");
var application_library_component_1 = require("./application-library/application-library.component");
var application_library_list_component_1 = require("./application-library/application-library-list/application-library-list.component");
var application_library_grid_component_1 = require("./application-library/application-library-grid/application-library-grid.component");
var twopage_component_1 = require("./twopage/twopage.component");
var material_module_1 = require("./../lib/material/material.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                landing_component_1.LandingComponent,
                macquarie_today_component_1.MacquarieTodayComponent,
                staff_overview_component_1.StaffOverviewComponent,
                staff_summary_component_1.StaffSummaryComponent,
                staff_summary_grid_component_1.StaffSummaryGridComponent,
                staff_summary_list_component_1.StaffSummaryListComponent,
                application_library_component_1.ApplicationLibraryComponent,
                application_library_list_component_1.ApplicationLibraryListComponent,
                application_library_grid_component_1.ApplicationLibraryGridComponent,
                twopage_component_1.TwopageComponent,
                banner_component_1.BannerComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                inner_footer_component_1.InnerFooterComponent,
                sidebar_component_1.SidebarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                full_module_1.FullModule,
                twopage_module_1.TwopageModule,
                material_module_1.MaterialModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
