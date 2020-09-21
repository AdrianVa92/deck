import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { TimezoneDatePipe } from './pipes/timezone-date.pipe';

import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    TimezoneDatePipe,
    ConfirmationDialogComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule,
    TimezoneDatePipe,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
]
})
export class SharedModule { }
