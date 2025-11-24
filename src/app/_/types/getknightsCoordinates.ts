import { Coordinate } from '../interfaces/coordinates.interface';

export class knightsCoordinates {
  numberOfRows: number = 8;
  numberOfColumns: number = 8;
  constructor() { }

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
}
export const knight = new knightsCoordinates();
