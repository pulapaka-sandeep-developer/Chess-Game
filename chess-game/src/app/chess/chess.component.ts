import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coordinate } from '../_/interfaces/coordinates.intreface';
import { Coins } from '../_/enums/coins.enum';
import { OptionalIndex } from '../_/interfaces/optionalIndex.interface';
import { Cell } from '../_/interfaces/cell.interface';
import { Direction } from '../_/enums/direction.enum';
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
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { CongratulationsComponent } from '../congratulations/congratulations.component';
@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule],
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

  nextPossibilityCoordinate = new NextPossibilityCoordinate(
    this.numberOfRows,
    this.numberOfColumns
  );

  constructor(public dialog: MatDialog, private _selectedCell: WiringService) {}

  blackCoin = POWERSBLACk;
  whiteCoin = POWERSWHITE;

  ngOnInit(): void {
    this.game();
  }

  getUserInfo() {
    let player1: string = <string>localStorage.getItem('playerOne');
    let player2: string = <string>localStorage.getItem('playerTwo');
    let checkColor = JSON.parse(player1);
    if (checkColor.chooseColor === 'White') {
      this.playerOne = checkColor;
    } else this.playerTwo = JSON.parse(player2);
  }

  game() {
    let cell!: Cell;
    this.board = new Array(this.numberOfRows);
    for (let i = 0; i < this.numberOfRows; i++) {
      this.board[i] = new Array(this.numberOfColumns);
      for (let j = 0; j < this.numberOfColumns; j++) {
        this.board[i][j] = {
          clue: Coins.Zero,
          highlight: false,
          color:
            i % 2 === 0 && j % 2 === 0
              ? true
              : i % 2 !== 0 && j % 2 !== 0
              ? true
              : false,
        };
      }
    }
    this.prepareBoard();
  }

  prepareBoard() {
    this.loadBlackConies();

    //white coines
    this.loadWhiteCoines();

    this.board.filter((rows, i) => {
      rows.filter((e, j) => {
        if (e.clue === Coins._bKing) {
          this.board[i][j].isBlackKing = true;
        }
        if (e.clue === Coins._wKing) {
          this.board[i][j].isWhiteKing = true;
        }
      });
    });
  }

  loadBlackConies() {
    this.board[this.numberOfRows - 1][this.numberOfColumns - 1] = {
      clue: this.blackCoin[0].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[0].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 2] = {
      clue: this.blackCoin[1].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[1].icon,
      color: false,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 3] = {
      clue: this.blackCoin[2].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[2].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 4] = {
      clue: this.blackCoin[3].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[3].icon,
      color: false,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 5] = {
      clue: this.blackCoin[4].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[4].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 6] = {
      clue: this.blackCoin[5].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[5].icon,
      color: false,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 7] = {
      clue: this.blackCoin[6].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[6].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 8] = {
      clue: this.blackCoin[7].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[7].icon,
      color: false,
    };
    //
    this.board[this.numberOfRows - 2][this.numberOfColumns - 1] = {
      clue: this.blackCoin[8].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[8].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 2] = {
      clue: this.blackCoin[9].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[9].icon,
      color: true,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 3] = {
      clue: this.blackCoin[10].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[10].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 4] = {
      clue: this.blackCoin[11].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[11].icon,
      color: true,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 5] = {
      clue: this.blackCoin[12].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[12].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 6] = {
      clue: this.blackCoin[13].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[13].icon,
      color: true,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 7] = {
      clue: this.blackCoin[14].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[14].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 8] = {
      clue: this.blackCoin[15].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[15].icon,
      color: true,
    };
  }

  loadWhiteCoines() {
    this.board[this.numberOfRows - 8][this.numberOfColumns - 1] = {
      clue: this.whiteCoin[0].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[0].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 2] = {
      clue: this.whiteCoin[1].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[1].icon,
      color: true,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 3] = {
      clue: this.whiteCoin[2].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[2].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 4] = {
      clue: this.whiteCoin[3].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[3].icon,
      color: true,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 5] = {
      clue: this.whiteCoin[4].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[4].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 6] = {
      clue: this.whiteCoin[5].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[5].icon,
      color: true,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 7] = {
      clue: this.whiteCoin[6].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[6].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 8] = {
      clue: this.whiteCoin[7].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[7].icon,
      color: true,
    };

    this.board[this.numberOfRows - 7][this.numberOfColumns - 1] = {
      clue: this.whiteCoin[8].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[8].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 2] = {
      clue: this.whiteCoin[9].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[9].icon,
      color: false,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 3] = {
      clue: this.whiteCoin[10].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[10].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 4] = {
      clue: this.whiteCoin[11].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[11].icon,
      color: false,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 5] = {
      clue: this.whiteCoin[12].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[12].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 6] = {
      clue: this.whiteCoin[13].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[13].icon,
      color: false,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 7] = {
      clue: this.whiteCoin[14].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[14].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 8] = {
      clue: this.whiteCoin[15].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[15].icon,
    };
  }

  getMemberCoordinates(member: OptionalIndex, count?: boolean) {
    // this.initialSelectedCoin = member;
    let coordinates: Coordinate[] = [];

    if (
      member.cell.clue === Coins._bRookL ||
      member.cell.clue === Coins._bRookR ||
      member.cell.clue === Coins._wRookL ||
      member.cell.clue === Coins._wRookR
    ) {
      coordinates = this.rook(member.rowIndex, member.columnIndex);
    } else if (
      member.cell.clue === Coins._bknightL ||
      member.cell.clue === Coins._bKnightR ||
      member.cell.clue === Coins._wknightL ||
      member.cell.clue === Coins._wKnightR
    ) {
      this.knightPalyers(member, count);
    } else if (
      member.cell.clue === Coins._bBishopL ||
      member.cell.clue === Coins._bBishopR ||
      member.cell.clue === Coins._wBishopL ||
      member.cell.clue === Coins._wBishopR
    ) {
      coordinates = this.bishop(member.rowIndex, member.columnIndex);
    } else if (
      member.cell.clue === Coins._bQueen ||
      member.cell.clue === Coins._wQueen
    ) {
      coordinates = this.queen(member.rowIndex, member.columnIndex);
    } else if (
      member.cell.clue === Coins._bKing ||
      member.cell.clue === Coins._wKing
    ) {
      // coordinates = this.king(member.rowIndex, member.columnIndex);
      this.kingPalyers(member, count);
    } else if (
      member.cell.clue === Coins._bPawn1 ||
      member.cell.clue === Coins._bPawn2 ||
      member.cell.clue === Coins._bPawn3 ||
      member.cell.clue === Coins._bPawn4 ||
      member.cell.clue === Coins._bPawn5 ||
      member.cell.clue === Coins._bPawn6 ||
      member.cell.clue === Coins._bPawn7 ||
      member.cell.clue === Coins._bPawn8
    ) {
      this.pawnPalyers(member, count);
    } else if (
      member.cell.clue === Coins._wPawn1 ||
      member.cell.clue === Coins._wPawn2 ||
      member.cell.clue === Coins._wPawn3 ||
      member.cell.clue === Coins._wPawn4 ||
      member.cell.clue === Coins._wPawn5 ||
      member.cell.clue === Coins._wPawn6 ||
      member.cell.clue === Coins._wPawn7 ||
      member.cell.clue === Coins._wPawn8
    ) {
      this.pawnPalyers(member);
    }
    return coordinates;
  }

  $$selectMember(rowindex: number, columnindex: number, cell: Cell): void {
    if (cell.highlight) {
      this.currentPosition = {
        rowIndex: rowindex,
        columnIndex: columnindex,
        cell: cell,
      };
      this.alert();
      this.$$move(this.currentPosition, this.previousPosition);
      this.check();
    } else {
      this.previousPosition = {
        rowIndex: rowindex,
        columnIndex: columnindex,
        cell: cell,
      };
      this.coordinates.forEach(
        (e) => (this.board[e.row][e.column].highlight = false)
      );

      let coordinates = this.getMemberCoordinates(this.previousPosition, true); //3
      this.checkPossibilities(this.previousPosition, coordinates);
    }
  }

  knight(row: number, column: number): Coordinate[] {
    const surroundingCells: Coordinate[] = [];
    surroundingCells.push({ row: row - 1, column: column - 2 });
    surroundingCells.push({ row: row - 2, column: column - 1 });
    surroundingCells.push({ row: row - 2, column: column + 1 });
    surroundingCells.push({ row: row - 1, column: column + 2 });

    surroundingCells.push({ row: row + 1, column: column + 2 });
    surroundingCells.push({ row: row + 2, column: column + 1 });
    surroundingCells.push({ row: row + 2, column: column - 1 });
    surroundingCells.push({ row: row + 1, column: column - 2 });

    for (let i = surroundingCells.length - 1; i >= 0; i--) {
      if (
        surroundingCells[i].row < 0 ||
        surroundingCells[i].column < 0 ||
        surroundingCells[i].row >= this.numberOfRows ||
        surroundingCells[i].column >= this.numberOfColumns
      ) {
        surroundingCells.splice(i, 1);
      }
    }
    return surroundingCells;
  }

  bishop(row: number, column: number): Coordinate[] {
    const surroundingCells: Coordinate[] = [];
    surroundingCells.push({
      row: row - 1,
      column: column + 1,
      direction: Direction.TopRight,
    });
    surroundingCells.push({
      row: row + 1,
      column: column + 1,
      direction: Direction.DownRight,
    });
    surroundingCells.push({
      row: row + 1,
      column: column - 1,
      direction: Direction.DownLeft,
    });
    surroundingCells.push({
      row: row - 1,
      column: column - 1,
      direction: Direction.TopLeft,
    });
    for (let i = surroundingCells.length - 1; i >= 0; i--) {
      if (
        surroundingCells[i].row < 0 ||
        surroundingCells[i].column < 0 ||
        surroundingCells[i].row >= this.numberOfRows ||
        surroundingCells[i].column >= this.numberOfColumns
      ) {
        surroundingCells.splice(i, 1);
      }
    }
    return surroundingCells;
  }

  rook(row: number, column: number): Coordinate[] {
    const surroundingCells: Coordinate[] = [];
    surroundingCells.push({
      row: row - 1,
      column: column,
      direction: Direction.Up,
    });
    surroundingCells.push({
      row: row,
      column: column + 1,
      direction: Direction.Right,
    });
    surroundingCells.push({
      row: row + 1,
      column: column,
      direction: Direction.Down,
    });
    surroundingCells.push({
      row: row,
      column: column - 1,
      direction: Direction.Left,
    });
    for (let i = surroundingCells.length - 1; i >= 0; i--) {
      if (
        surroundingCells[i].row < 0 ||
        surroundingCells[i].column < 0 ||
        surroundingCells[i].row >= this.numberOfRows ||
        surroundingCells[i].column >= this.numberOfColumns
      ) {
        surroundingCells.splice(i, 1);
      }
    }
    return surroundingCells;
  }

  queen(row: number, column: number): Coordinate[] {
    const surroundingCells: Coordinate[] = [];
    surroundingCells.push({
      row: row - 1,
      column: column + 0,
      direction: Direction.Up,
    });
    surroundingCells.push({
      row: row + 0,
      column: column + 1,
      direction: Direction.Right,
    });
    surroundingCells.push({
      row: row + 1,
      column: column + 0,
      direction: Direction.Down,
    });
    surroundingCells.push({
      row: row + 0,
      column: column - 1,
      direction: Direction.Left,
    });
    surroundingCells.push({
      row: row - 1,
      column: column + 1,
      direction: Direction.TopRight,
    });
    surroundingCells.push({
      row: row + 1,
      column: column + 1,
      direction: Direction.DownRight,
    });
    surroundingCells.push({
      row: row + 1,
      column: column - 1,
      direction: Direction.DownLeft,
    });
    surroundingCells.push({
      row: row - 1,
      column: column - 1,
      direction: Direction.TopLeft,
    });
    for (let i = surroundingCells.length - 1; i >= 0; i--) {
      if (
        surroundingCells[i].row < 0 ||
        surroundingCells[i].column < 0 ||
        surroundingCells[i].row >= this.numberOfRows ||
        surroundingCells[i].column >= this.numberOfColumns
      ) {
        surroundingCells.splice(i, 1);
      }
    }
    return surroundingCells;
  }

  king(row: number, column: number): Coordinate[] {
    const surroundingCells: Coordinate[] = [];
    // surroundingCells.push({ row: row - 1, column: column - 1, direction: Direction.DownLeft });
    // surroundingCells.push({ row: row + 1, column: column - 1 });
    // surroundingCells.push({ row: row + 1, column: column + 1 });
    // surroundingCells.push({ row: row - 1, column: column + 1 });

    // surroundingCells.push({ row: row - 1, column: column + 0 });
    // surroundingCells.push({ row: row + 1, column: column + 0 });
    // surroundingCells.push({ row: row + 0, column: column + 1 });
    // surroundingCells.push({ row: row + 0, column: column - 1 });
    surroundingCells.push({
      row: row - 1,
      column: column + 0,
      direction: Direction.Up,
    });
    surroundingCells.push({
      row: row + 0,
      column: column + 1,
      direction: Direction.Right,
    });
    surroundingCells.push({
      row: row + 1,
      column: column + 0,
      direction: Direction.Down,
    });
    surroundingCells.push({
      row: row + 0,
      column: column - 1,
      direction: Direction.Left,
    });

    surroundingCells.push({
      row: row - 1,
      column: column + 1,
      direction: Direction.TopRight,
    });
    surroundingCells.push({
      row: row + 1,
      column: column + 1,
      direction: Direction.DownRight,
    });
    surroundingCells.push({
      row: row + 1,
      column: column - 1,
      direction: Direction.DownLeft,
    });
    surroundingCells.push({
      row: row - 1,
      column: column - 1,
      direction: Direction.TopLeft,
    });

    for (let i = surroundingCells.length - 1; i >= 0; i--) {
      if (
        surroundingCells[i].row < 0 ||
        surroundingCells[i].column < 0 ||
        surroundingCells[i].row >= this.numberOfRows ||
        surroundingCells[i].column >= this.numberOfColumns
      ) {
        surroundingCells.splice(i, 1);
      }
    }
    return surroundingCells;
  }

  pawnB(row: number, column: number): Coordinate[] {
    const surroundingCells: Coordinate[] = [];
    surroundingCells.push({
      row: row - 1,
      column: column + 0,
      direction: Direction.Up,
    });
    surroundingCells.push({
      row: row - 2,
      column: column + 0,
      direction: Direction.Up1,
    });

    //options kill case
    surroundingCells.push({
      row: row - 1,
      column: column + 1,
      direction: Direction.TopRight,
    });
    surroundingCells.push({
      row: row - 1,
      column: column - 1,
      direction: Direction.TopRight,
    });

    for (let i = surroundingCells.length - 1; i >= 0; i--) {
      if (
        surroundingCells[i].row < 0 ||
        surroundingCells[i].column < 0 ||
        surroundingCells[i].row >= this.numberOfRows ||
        surroundingCells[i].column >= this.numberOfColumns
      ) {
        surroundingCells.splice(i, 1);
      }
    }
    return surroundingCells;
  }

  pawnW(row: number, column: number): Coordinate[] {
    const surroundingCells: Coordinate[] = [];
    surroundingCells.push({
      row: row + 1,
      column: column,
      direction: Direction.Down,
    });
    surroundingCells.push({
      row: row + 2,
      column: column,
      direction: Direction.Down1,
    });

    // 	//options kill case
    surroundingCells.push({
      row: row + 1,
      column: column + 1,
      direction: Direction.DownLeft,
    });
    surroundingCells.push({
      row: row + 1,
      column: column - 1,
      direction: Direction.DownRight,
    });

    for (let i = surroundingCells.length - 1; i >= 0; i--) {
      if (
        surroundingCells[i].row < 0 ||
        surroundingCells[i].column < 0 ||
        surroundingCells[i].row >= this.numberOfRows ||
        surroundingCells[i].column >= this.numberOfColumns
      ) {
        surroundingCells.splice(i, 1);
      }
    }
    // surroundingCells.forEach((e) => { this.board[e.row][e.column].highlight = true; console.log(e.row, "space", e.column) });
    return surroundingCells;
  }

  kingPalyers(member: OptionalIndex, check?: boolean) {
    const coordinates: Coordinate[] = this.king(
      member.rowIndex,
      member.columnIndex
    );
    // return coordinates;
    if (member.cell.isWhiteCoin) {
      coordinates.forEach((coordinate) => {
        if (this.board[coordinate.row][coordinate.column].clue === Coins.Zero) {
          //   this.board[coordinate.row][coordinate.column].highlight = true;
          if (check)
            this.board[coordinate.row][coordinate.column].highlight = true;
          else this.board[coordinate.row][coordinate.column].isPossable = true;
          this.coordinates.push(coordinate);
        } else if (
          this.board[coordinate.row][coordinate.column].clue !== Coins.Zero
        ) {
          this.cellNonZero(member, coordinate);
          this.coordinates.push(coordinate);
        }
      });
    } else if (member.cell.isBlackCoin) {
      coordinates.forEach((coordinate) => {
        if (this.board[coordinate.row][coordinate.column].clue === Coins.Zero) {
          //   this.board[coordinate.row][coordinate.column].highlight = true;
          if (check)
            this.board[coordinate.row][coordinate.column].highlight = true;
          else this.board[coordinate.row][coordinate.column].isPossable = true;
          this.coordinates.push(coordinate);
        } else if (
          this.board[coordinate.row][coordinate.column].clue !== Coins.Zero
        ) {
          this.cellNonZero(member, coordinate);
          this.coordinates.push(coordinate);
        }
      });
    }
  }

  pawnPalyers(member: OptionalIndex, check?: boolean) {
    if (member.cell.isWhiteCoin) {
      const coordinates: Coordinate[] = this.pawnW(
        member.rowIndex,
        member.columnIndex
      );
      if (member.rowIndex !== 1) {
        const isExist = coordinates.findIndex(
          (e) => e.direction === Direction.Down1
        );
        if (isExist > 0) coordinates.splice(isExist, 1);
      }
      coordinates.forEach((coordinate) => {
        if (this.board[coordinate.row][coordinate.column].clue === Coins.Zero) {
          //one cell up
          if (!coordinate.direction) return;
          if (coordinate.direction === Direction.Down) {
            this.board[coordinate.row][coordinate.column].highlight = true;
          } else if (coordinate.direction === Direction.Down1) {
            const downCoordinate = <Coordinate>(
              coordinates.find((e) => e.direction === Direction.Down)
            );
            if (
              this.board[downCoordinate.row][downCoordinate.column].clue ===
              Coins.Zero
            )
              this.board[coordinate.row][coordinate.column].highlight = true;
            else
              this.board[downCoordinate.row][downCoordinate.column].highlight =
                false;
          }
          this.coordinates.push(coordinate);
        } else if (
          this.board[coordinate.row][coordinate.column].clue !== Coins.Zero
        ) {
          if (coordinate.direction === Direction.DownLeft) {
            if (this.board[coordinate.row][coordinate.column].isBlackCoin)
              this.board[coordinate.row][coordinate.column].highlight = true;
          } else if (coordinate.direction === Direction.DownRight) {
            if (this.board[coordinate.row][coordinate.column].isBlackCoin)
              this.board[coordinate.row][coordinate.column].highlight = true;
          }
          this.coordinates.push(coordinate);
        }
      });
    } else if (member.cell.isBlackCoin) {
      const coordinates: Coordinate[] = this.pawnB(
        member.rowIndex,
        member.columnIndex
      );

      if (member.rowIndex !== 6) {
        const isExist = coordinates.findIndex(
          (e) => e.direction === Direction.Up1
        );
        if (isExist > 0) coordinates.splice(isExist, 1);
      }

      coordinates.forEach((coordinate) => {
        if (this.board[coordinate.row][coordinate.column].clue === Coins.Zero) {
          //one cell up
          if (!coordinate.direction) return;
          if (coordinate.direction === Direction.Up) {
            this.board[coordinate.row][coordinate.column].highlight = true;
          } else if (coordinate.direction === Direction.Up1) {
            const upCoordinate = <Coordinate>(
              coordinates.find((e) => e.direction === Direction.Up)
            );
            if (
              this.board[upCoordinate.row][upCoordinate.column].clue ===
              Coins.Zero
            )
              this.board[coordinate.row][coordinate.column].highlight = true;
            else
              this.board[upCoordinate.row][upCoordinate.column].highlight =
                false;
          }

          this.coordinates.push(coordinate);
        } else if (
          this.board[coordinate.row][coordinate.column].clue !== Coins.Zero
        ) {
          if (coordinate.direction === Direction.TopLeft) {
            if (this.board[coordinate.row][coordinate.column].isWhiteCoin)
              this.board[coordinate.row][coordinate.column].highlight = true;
          } else if (coordinate.direction === Direction.TopRight) {
            if (this.board[coordinate.row][coordinate.column].isWhiteCoin)
              this.board[coordinate.row][coordinate.column].highlight = true;
          }
          this.coordinates.push(coordinate);
        }
      });
    }
  }

  whitePowers(member: OptionalIndex, whiteCoins: Cell[]) {
    let selectedMember = member;
    for (let i = 0; i < whiteCoins.length; i++) {
      if (member.rowIndex > 6 && member.cell.clue === whiteCoins[i].clue) {
        const dialogRef = this.dialog.open(DialogBoxComponent, {
          data: member,
        });
        dialogRef.afterClosed().subscribe((selectedCell) => {
          if (!selectedMember) return;
          this.updateChooseCoine(selectedMember, selectedCell);
        });
      }
    }
  }

  blackPowers(member: OptionalIndex, blackCoins: Cell[]) {
    let selectedMember = member;
    for (let j = 0; j < blackCoins.length; j++) {
      if (member.rowIndex === 0 && member.cell.clue === blackCoins[j].clue) {
        const dialogRef = this.dialog.open(DialogBoxComponent, {
          data: member,
        });
        dialogRef.afterClosed().subscribe((selectedCell) => {
          if (!selectedMember) return;
          this.updateChooseCoine(selectedMember, selectedCell);
        });
      }
    }
  }

  chooseYourPower(member: OptionalIndex) {
    if (member.cell.isWhiteCoin) {
      const whiteCoins: Cell[] = [];
      this.whiteCoin.filter((e, i) => {
        if (i > 7) whiteCoins.push(e);
      });

      if (whiteCoins && whiteCoins.length && whiteCoins.length > -1) {
        this.whitePowers(member, whiteCoins);
      }
    } else if (member.cell.isBlackCoin) {
      const blackCoins: Cell[] = [];
      this.blackCoin.filter((e, i) => {
        if (i > 7) blackCoins.push(e);
      });

      if (blackCoins && blackCoins.length && blackCoins.length > -1) {
        this.blackPowers(member, blackCoins);
      }
    }
  }

  updateChooseCoine(selectedMember: OptionalIndex, selectedCell: Cell) {
    this.board[selectedMember.rowIndex][selectedMember.columnIndex].clue =
      selectedCell.clue;
    this.board[selectedMember.rowIndex][selectedMember.columnIndex].icon =
      selectedCell.icon;
  }

  knightPalyers(member: OptionalIndex, check?: boolean) {
    const coordinates: Coordinate[] = this.knight(
      member.rowIndex,
      member.columnIndex
    );
    coordinates.forEach((coordinate) => {
      if (this.board[coordinate.row][coordinate.column].clue === Coins.Zero) {
        this.board[coordinate.row][coordinate.column].highlight = true;
        if (check)
          this.board[coordinate.row][coordinate.column].highlight = true;
        else this.board[coordinate.row][coordinate.column].isPossable = true;
        this.coordinates.push(coordinate);
      } else if (
        this.board[coordinate.row][coordinate.column].clue !== Coins.Zero
      ) {
        this.cellNonZero(member, coordinate);

        this.coordinates.push(coordinate);
      }
    });
  }

  checkPossibilities(
    member: OptionalIndex,
    coordinates: Coordinate[],
    check?: boolean
  ) {
    coordinates.forEach((coordinate) =>
      this.check_Possibility(member, coordinate)
    );
  }

  private check_Possibility(member: OptionalIndex, coordinate: Coordinate) {
    if (this.board[coordinate.row][coordinate.column].clue !== Coins.Zero) {
      this.cellNonZero(member, coordinate);
    } else if (
      this.board[coordinate.row][coordinate.column].clue === Coins.Zero
    ) {
      if (!coordinate.direction) return;
      this.coordinates.push(coordinate);
      this.board[coordinate.row][coordinate.column].highlight = true;
      if (coordinate.direction === Direction.Up) {
        let nextCoordinate = this.nextPossibilityCoordinate.up(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      } else if (coordinate.direction === Direction.Down) {
        let nextCoordinate = this.nextPossibilityCoordinate.down(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      } else if (coordinate.direction === Direction.Right) {
        let nextCoordinate = this.nextPossibilityCoordinate.right(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      } else if (coordinate.direction === Direction.Left) {
        let nextCoordinate = this.nextPossibilityCoordinate.left(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      } else if (coordinate.direction === Direction.TopRight) {
        let nextCoordinate =
          this.nextPossibilityCoordinate.topRight(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      } else if (coordinate.direction === Direction.TopLeft) {
        let nextCoordinate = this.nextPossibilityCoordinate.topLeft(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      } else if (coordinate.direction === Direction.DownRight) {
        let nextCoordinate =
          this.nextPossibilityCoordinate.downRight(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      } else if (coordinate.direction === Direction.DownLeft) {
        let nextCoordinate =
          this.nextPossibilityCoordinate.downLeft(coordinate);
        if (nextCoordinate === undefined) return;
        this.check_Possibility(member, nextCoordinate);
      }
    }
  }

  cellNonZero(member: OptionalIndex, coordinate: Coordinate) {
    if (member.cell.isBlackCoin) {
      //selected cell
      if (this.board[coordinate.row][coordinate.column].isWhiteCoin) {
        // surrounding coordinates
        this.coordinates.push(coordinate);
        this.board[coordinate.row][coordinate.column].highlight = true;
      }
    } else if (member.cell.isWhiteCoin) {
      if (this.board[coordinate.row][coordinate.column].isBlackCoin) {
        this.coordinates.push(coordinate);
        this.board[coordinate.row][coordinate.column].highlight = true;
      }
    }
  }

  $$move(currentPosition: OptionalIndex, previousPosition: OptionalIndex) {
    if (previousPosition.cell.clue > 0 && currentPosition.cell.clue > 0) {
      this.changeCoine(currentPosition, previousPosition);
    } else {
      this.changeCoine(currentPosition, previousPosition);
    }

    this.chooseYourPower(currentPosition); //dialog box

    this.coordinates.forEach(
      (e) => (this.board[e.row][e.column].highlight = false)
    );
    this.coordinates = [];
  }
  changeCoine(currentPosition: OptionalIndex, previousPosition: OptionalIndex) {
    this.gameEnd();
    // this.moveColor();

    this.board[currentPosition.rowIndex][currentPosition.columnIndex].clue =
      previousPosition.cell.clue;

    this.board[currentPosition.rowIndex][
      currentPosition.columnIndex
    ].isWhiteCoin = previousPosition.cell.isWhiteCoin;

    this.board[currentPosition.rowIndex][
      currentPosition.columnIndex
    ].isBlackCoin = previousPosition.cell.isBlackCoin;

    this.board[currentPosition.rowIndex][currentPosition.columnIndex].icon =
      previousPosition.cell.icon;

    //Here update the board
    this.board[previousPosition.rowIndex][previousPosition.columnIndex].clue =
      Coins.Zero;
    this.board[previousPosition.rowIndex][
      previousPosition.columnIndex
    ].isBlackCoin = false;

    this.board[previousPosition.rowIndex][
      previousPosition.columnIndex
    ].isWhiteCoin = false;

    this.board[previousPosition.rowIndex][previousPosition.columnIndex].icon =
      '';
    this.checkColor();
    this.gameEnd();
  }

  gameEnd() {
    let checkgame: Cell[] = [];
    this.board.filter((rows, i) => {
      rows.filter((e, j) => {
        if (e.clue === Coins._wKing) {
          checkgame.push(e);
        }
        if (e.clue === Coins._bKing) {
          checkgame.push(e);
        }
      });
    });
    if (checkgame && checkgame.length && checkgame.length === 1) {
      if (checkgame[0].isWhiteKing)
        this.openCongratulationsComponent(checkgame);
      else if (checkgame[0].isBlackKing)
        this.openCongratulationsComponent(checkgame);
    }
    checkgame = [];
  }

  alert() {
    this.board.filter((rows, i) => {
      rows.filter((e, j) => {
        if (e.clue === Coins._wKing) {
          e.isAlert = false;
        }
        if (e.clue === Coins._bKing) {
          e.isAlert = false;
        }
      });
    });
  }

  openCongratulationsComponent(checkgame: Cell[]) {
    //checkgame: Cell
    console.log('cell', checkgame);

    let userData = [
      {
        name: 'Sandeep',
        age: '28',
        gender: 'Male',
        profilePicture: '',
        color: 'White',
        isWhite: true,
        count: 1,
        isBlack: false,
        clue: 2,
      },
      {
        clue: 1,
        name: 'Raghu',
        age: '28',
        gender: 'Male',
        profilePicture: '',
        color: 'Black',
        isBlack: true,
        isWhite: false,
        count: 1,
      },
    ];

    let a = userData.find((e) => e.clue === 1);
    console.log('user', a);

    this.dialog.open(CongratulationsComponent, {
      data: [a],
      width: '28%',
      height: '52.4%',
      disableClose: true,
    });
  }

  checkmate(possibilityCoordinates: OptionalIndex[]) {
    possibilityCoordinates.forEach((e) => {
      if (this.board[e.rowIndex][e.columnIndex].clue === Coins._wKing) {
        this.board[e.rowIndex][e.columnIndex].isAlert = true;
        setTimeout(() => {
          alert('Check in whtie  king');
        }, 100);
      }
      if (this.board[e.rowIndex][e.columnIndex].clue === Coins._bKing) {
        this.board[e.rowIndex][e.columnIndex].isAlert = true;
        setTimeout(() => {
          alert('Check in black king');
        }, 100);
      }
      if (e) {
        e.cell.highlight = false;
      }
    });
    possibilityCoordinates = [];
  }

  isHighlightCoordinates() {
    const highlightCoordinates: OptionalIndex[] = [];
    this.board.filter((row, i) => {
      row.filter((cell, j) => {
        if (cell.highlight)
          highlightCoordinates.push({
            rowIndex: i,
            columnIndex: j,
            cell: cell,
          });
      });
    });
    return highlightCoordinates;
  }

  check() {
    this.board.filter((row, i) =>
      row.filter((cell, j) => {
        if (cell.isBlackCoin) {
          let coines: OptionalIndex = {
            rowIndex: i,
            columnIndex: j,
            cell: cell,
          };
          let coord = this.getMemberCoordinates(coines, false);
          this.checkPossibilities(coines, coord, false);
          const highlightCoordinates = this.isHighlightCoordinates();
          this.checkmate(highlightCoordinates);
        }
        if (cell.isWhiteCoin) {
          let coines: OptionalIndex = {
            rowIndex: i,
            columnIndex: j,
            cell: cell,
          };
          let coord = this.getMemberCoordinates(coines, false);
          this.checkPossibilities(coines, coord, false);
          const highlightCoordinates = this.isHighlightCoordinates();
          this.checkmate(highlightCoordinates);
        }
      })
    );
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
