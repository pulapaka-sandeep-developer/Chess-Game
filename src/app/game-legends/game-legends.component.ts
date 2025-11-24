import { Component } from '@angular/core';
import { Cell } from '../_/interfaces/cell.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game-legends',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './game-legends.component.html',
  styleUrl: './game-legends.component.scss',
})
export class GameLegendsComponent {
  constructor(private router: Router, private matdialog: MatDialog) {}
  data = [
    {
      clue: 1,
      isWhite: true,
      message: 'White cell',
    },
    {
      clue: 2,
      isBlack: true,
      message: 'Black cell',
    },
    {
      clue: 3,
      isHiehtlight: true,
      message: 'Possiable  to move in this cell ',
    },
    {
      clue: 4,
      isAlert: true,
      message: 'Alert the check the king',
    },
  ];

  $$openChess() {
    this.router.navigate(['/game-chess']);
    this.matdialog.closeAll();
  }
}
