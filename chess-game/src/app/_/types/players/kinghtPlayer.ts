import { Coins } from "../../enums/coins.enum";
import { Coordinate } from "../../interfaces/coordinates.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";
import { knightsCoordinates } from "../getknightsCoordinates";
import { CellNonZero } from "./cellNonZero";

export class KnightPlayers {
    board: any[][] = [];
    coordinates: Coordinate[] = [];
    constructor(board: any[][], coordinates: Coordinate[] = []) {
        this.board = board;
        this.coordinates = coordinates;
    }

    knightPlayers(member: OptionalIndex, check?: boolean) {
        const coordinates: Coordinate[] = new knightsCoordinates().knight(member.rowIndex, member.columnIndex);
        // const coordinates: Coordinate[] = this.knight(
        //   member.rowIndex,
        //   member.columnIndex
        // );

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
                // this.cellNonZero(member, coordinate);
                new CellNonZero(this.board, this.coordinates).cellNonZero(member, coordinate);
                this.coordinates.push(coordinate);
            }
        });
    }
}