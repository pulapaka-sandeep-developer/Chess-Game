import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(private matDialogBox: MatDialog) {}

  openDialogWindow() {
    this.matDialogBox.open(DialogBoxComponent, {});
  }
}
