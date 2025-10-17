import { Coins } from "../../enums/coins.enum";
import { Direction } from "../../enums/direction.enum";
import { Cell } from "../../interfaces/cell.interface";
import { Coordinate } from "../../interfaces/coordinates.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";
import { PawnsCoordinates } from "../getPawnsCoordinates";


export class PawnPlayers {
    coordinates: Coordinate[] = [];
    board: Cell[][] = [];
    constructor(board: Cell[][], coordinates: Coordinate[]) {
        this.board = board;
        this.coordinates = coordinates
    }

    pawnPlayers(member: OptionalIndex) {
        if (member.cell.isWhiteCoin) {
            this.pawnWhite(member);
        } else if (member.cell.isBlackCoin) {
            this.pawnBlack(member);
        }
    }

    private pawnWhite(member: OptionalIndex) {
        const coordinates: Coordinate[] = new PawnsCoordinates().pawnW(member.rowIndex, member.columnIndex);
        // const coordinates: Coordinate[] = this.pawnW(
        //   member.rowIndex,
        //   member.columnIndex
        // );
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
    }
    private pawnBlack(member: OptionalIndex) {
        const coordinates: Coordinate[] = new PawnsCoordinates().pawnB(member.rowIndex, member.columnIndex);
        // const coordinates: Coordinate[] = this.pawnB(
        //   member.rowIndex,
        //   member.columnIndex
        // );

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