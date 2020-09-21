import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  type: string;
  title: string;
  body: string;
  confirmText: string;
  cancelText: string;
}

@Component({
  selector: 'lib-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  type = '';
  title = '';
  body = '';
  confirmText = '';
  cancelText = '';

  constructor(
    private _dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: DialogData,
  ) {
    this.type = _data.type || '';
    this.title = _data.title || '';
    this.body = _data.body || '';
    this.confirmText = _data.confirmText || 'Confirm';
    this.cancelText = _data.cancelText || 'Cancel';
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this._dialogRef.close(true);
  }

}
