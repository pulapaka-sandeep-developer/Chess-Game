import { Component, Inject, OnInit } from '@angular/core';
import { POWERSBLACk } from '../_/const/assigning-black-fontAwesome';
import { POWERSWHITE } from '../_/const/assigning-white-fontAwesome';
import { Cell } from '../_/interfaces/cell.interface';
import { Coins } from '../_/enums/coins.enum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OptionalIndex } from '../_/interfaces/optionalIndex.interface';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule, MatDialogModule],
})
export class DialogBoxComponent implements OnInit {
  blackCoin = POWERSBLACk;
  whiteCoin = POWERSWHITE;
  data: any = [];

  selectedCell!: Cell;

  constructor(
    private dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedMember: OptionalIndex
  ) {}

  ngOnInit(): void {
    this.remove(this.selectedMember); //this.data
  }

  remove(selectedMember: OptionalIndex) {
    const coins = selectedMember.cell.isBlackCoin ? this.blackCoin : this.whiteCoin;
    coins.forEach((coins: Cell, index: number) => {
      if (index <= 7) this.data.push(coins);
    });
    let king = this.data.findIndex(
      (cell: Cell) => cell.clue === Coins._bKing || cell.clue === Coins._wKing
    );
    if (king > -1) this.data.splice(king, 1);
  }

  onClick(cell: Cell) {
    this.selectedCell = cell;
  }

  submit() {
    this.dialogRef.close(this.selectedCell);
  }
}
