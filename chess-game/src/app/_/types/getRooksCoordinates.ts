import { Direction } from '../enums/direction.enum';
import { Coordinate } from '../interfaces/coordinates.intreface';

export class GetRooksCoordinates {
  numberOfRows: number = 8;
  numberOfColumns: number = 8;
  constructor() {}

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
}
