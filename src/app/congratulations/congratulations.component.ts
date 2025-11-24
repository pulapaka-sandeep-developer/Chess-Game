import { Component, Inject, OnInit } from '@angular/core';
import { CardViewComponent } from '../card-view/card-view.component';
import { player } from '../_/interfaces/playersInfo.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Cell } from '../_/interfaces/cell.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './congratulations.component.html',
  styleUrl: './congratulations.component.scss',
})
export class CongratulationsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CongratulationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: player[],
    private router:Router
  ) {}
  // winner = [];
  player1: boolean = false;
  player2: boolean = false;

  ngOnInit(): void {
    // console.log(this.data);
    
  }

  $$playAgain() {
    this.router.navigate(['/game-chess']);
  }

  $$close() {
    this.dialogRef.close();
  }
}
