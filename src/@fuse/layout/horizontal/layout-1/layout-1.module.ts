import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FuseSidebarModule, FuseThemeOptionsModule } from 'projects/deck/src/@fuse/components';
import { FuseSharedModule } from 'projects/deck/src/@fuse/shared.module';

import { ContentModule } from 'projects/deck/src/@fuse/layout/components/content/content.module';
import { FooterModule } from 'projects/deck/src/@fuse/layout/components/footer/footer.module';
import { NavbarModule } from 'projects/deck/src/@fuse/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'projects/deck/src/@fuse/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'projects/deck/src/@fuse/layout/components/toolbar/toolbar.module';

import { HorizontalLayout1Component } from 'projects/deck/src/@fuse/layout/horizontal/layout-1/layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
