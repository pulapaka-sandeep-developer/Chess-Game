import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coordinate } from '../_/interfaces/coordinates.interface';
import { Coins } from '../_/enums/coins.enum';
import { OptionalIndex } from '../_/interfaces/optionalIndex.interface';
import { Cell } from '../_/interfaces/cell.interface';
import { NextPossibilityCoordinate } from '../_/types/nextPossibilityCoordinate';
import { POWERSBLACk } from '../_/const/assigning-black-fontAwesome';
import { POWERSWHITE } from '../_/const/assigning-white-fontAwesome';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { WiringService } from '../services/wiring.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CongratulationsComponent } from '../congratulations/congratulations.component';
import { LoadBlackPowers } from '../_/types/getLoadBlackPowers';
import { LoadWhitePowers } from '../_/types/getLoadWhitePowers';
import { CheckPossibility } from '../_/types/players/check_Possibilities';
import { GetAllMembersCoordinates } from '../_/types/rootGetsMembersCoordinates';
import { CheckGame } from '../_/types/main/checkGame';
import { InitializeBoard } from '../_/types/main/initializeBoard';
import { Move } from '../_/types/main/move';
import { GameAlert } from '../_/types/gameAlert';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    // BlackKillsComponent,
    // WhiteKillsComponent,
  ],
})
export class ChessComponent implements OnInit {
  board: Cell[][] = [];
  numberOfRows: number = 8;
  numberOfColumns: number = 8;
  coordinates: Coordinate[] = [];
  initialSelectedCoin!: OptionalIndex;
  checkCoine: boolean = false;
  possibilityCoordinates: OptionalIndex[] = [];

  previousPosition!: OptionalIndex;
  currentPosition!: OptionalIndex;

  whiteTurn: boolean = true;
  BlackTurn: boolean = false;

  playerOne: any = {};
  playerTwo: any = {};

  constructor(public dialog: MatDialog, private _selectedCell: WiringService) { }

  ngOnInit(): void {
    const board = new InitializeBoard(this.board).initializeBoard();
    this.board = board;
  }

  getUserInfo() {
    let player1: string = <string>localStorage.getItem('playerOne');
    let player2: string = <string>localStorage.getItem('playerTwo');
    let checkColor = JSON.parse(player1);
    if (checkColor.chooseColor === 'White') {
      this.playerOne = checkColor;
    } else this.playerTwo = JSON.parse(player2);
  }

  $$selectMember(rowIndex: number, columnIndex: number, cell: Cell): void {
    debugger
    if (cell.highlight) {
      this.currentPosition = {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        cell: cell,
      };
      new Move(this.board, this.coordinates, this.dialog).$$move(this.currentPosition, this.previousPosition);
      this.coordinates = [];
      new CheckGame(this.board, this.coordinates).check();
    } else {
      this.previousPosition = {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        cell: cell,
      };
      this.coordinates.forEach(
        (e) => (this.board[e.row][e.column].highlight = false)
      );
      let coordinates = new GetAllMembersCoordinates(this.board, this.coordinates).getMemberCoordinates(this.previousPosition, true);
      new CheckPossibility(this.board, this.coordinates).checkPossibilities(this.previousPosition, coordinates);
    }
  }

  checkColor() {
    if (this.whiteTurn) {
      this.BlackTurn = true;
      this.whiteTurn = false;
    } else {
      this.BlackTurn = false;
      this.whiteTurn = true;
    }
  }

}
