import { Direction } from '../enums/direction.enum';
import { Coordinate } from '../interfaces/coordinates.interface';

export class PawnsCoordinates {
  numberOfRows: number = 8;
  numberOfColumns: number = 8;
  constructor() { }

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
}
export const pawnsCoordinates = new PawnsCoordinates();