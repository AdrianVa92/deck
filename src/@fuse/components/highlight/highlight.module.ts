import { NgModule } from '@angular/core';

import { FuseHighlightComponent } from 'projects/deck/src/@fuse/components/highlight/highlight.component';

@NgModule({
    declarations: [
        FuseHighlightComponent
    ],
    exports: [
        FuseHighlightComponent
    ],
})
export class FuseHighlightModule
{
}
