import { Coins } from "../../enums/coins.enum";
import { Cell } from "../../interfaces/cell.interface";
import { Coordinate } from "../../interfaces/coordinates.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";
import { KingsCoordinates } from "../getKingsCoordinates";
import { CellNonZero } from "../players/cellNonZero";

export class KingPlayers {
    board: Cell[][] = [];
    coordinates: Coordinate[] = [];

    constructor(board: Cell[][]) {
        this.board = board;
    }
    kingPlayers(member: OptionalIndex, check?: boolean) {
        // const coordinates: Coordinate[] = this.king(
        //   member.rowIndex,
        //   member.columnIndex
        // );
        const coordinates: Coordinate[] = new KingsCoordinates().king(member.rowIndex, member.columnIndex);
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
                    // this.cellNonZero(member, coordinate);
                    // CellNonZero.prototype.cellNonZero.call(this, member, coordinate);
                    new CellNonZero(this.board, this.coordinates).cellNonZero(member, coordinate);
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
                    // this.cellNonZero(member, coordinate);
                    new CellNonZero(this.board, this.coordinates).cellNonZero(member, coordinate);
                    this.coordinates.push(coordinate);
                }
            });
        }
    }

}