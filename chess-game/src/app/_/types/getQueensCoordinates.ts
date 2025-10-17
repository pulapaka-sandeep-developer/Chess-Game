import exp from 'constants';
import { Coins } from '../enums/coins.enum';
import { Direction } from '../enums/direction.enum';
import { Coordinate } from '../interfaces/coordinates.interface';
import { OptionalIndex } from '../interfaces/optionalIndex.interface';

export class QueensCoordinates {
  numberOfRows: number = 8;
  numberOfColumns: number = 8;
  constructor() { }
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
}
export const queen = new QueensCoordinates();