import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSidebarModule } from 'projects/deck/src/@fuse/components/index';
import { FuseSharedModule } from 'projects/deck/src/@fuse/shared.module';

import { ContentModule } from 'projects/deck/src/@fuse/layout/components/content/content.module';
import { FooterModule } from 'projects/deck/src/@fuse/layout/components/footer/footer.module';
import { NavbarModule } from 'projects/deck/src/@fuse/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'projects/deck/src/@fuse/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'projects/deck/src/@fuse/layout/components/toolbar/toolbar.module';

import { VerticalLayout3Component } from 'projects/deck/src/@fuse/layout/vertical/layout-3/layout-3.component';

@NgModule({
    declarations: [
        VerticalLayout3Component
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayout3Component
    ]
})
export class VerticalLayout3Module
{
}
