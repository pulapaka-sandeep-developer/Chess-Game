import { Coordinate } from "../../interfaces/coordinates.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";

export class CellNonZero {
    board: any[][] = [];
    coordinates: Coordinate[] = [];

    constructor(board: any[][], coordinates: Coordinate[]) {
        this.board = board;
        this.coordinates = coordinates;
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
}
