import { Coins } from "../../enums/coins.enum";
import { Direction } from "../../enums/direction.enum";
import { Cell } from "../../interfaces/cell.interface";
import { Coordinate } from "../../interfaces/coordinates.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";
import { NextPossibilityCoordinate } from "../nextPossibilityCoordinate";
import { CellNonZero } from "./cellNonZero";

export class CheckPossibility {
    numberOfRows: number = 8;
    numberOfColumns: number = 8;
    board: Cell[][] = [];
    coordinates: Coordinate[] = [];

    constructor(board: Cell[][], coordinates: Coordinate[]) {
        this.board = board;
        this.coordinates = coordinates;
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
            // this.cellNonZero(member, coordinate);
            new CellNonZero(this.board, this.coordinates).cellNonZero(member, coordinate);
        } else if (
            this.board[coordinate.row][coordinate.column].clue === Coins.Zero
        ) {
            if (!coordinate.direction) return;
            this.coordinates.push(coordinate);
            this.board[coordinate.row][coordinate.column].highlight = true;
            if (coordinate.direction === Direction.Up) {
                // let nextCoordinate = this.nextPossibilityCoordinate.up(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).up(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            } else if (coordinate.direction === Direction.Down) {
                // let nextCoordinate = this.nextPossibilityCoordinate.down(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).down(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            } else if (coordinate.direction === Direction.Right) {
                // let nextCoordinate = this.nextPossibilityCoordinate.right(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).right(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            } else if (coordinate.direction === Direction.Left) {
                // let nextCoordinate = this.nextPossibilityCoordinate.left(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).left(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            } else if (coordinate.direction === Direction.TopRight) {
                // let nextCoordinate = this.nextPossibilityCoordinate.topRight(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).topRight(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            } else if (coordinate.direction === Direction.TopLeft) {
                // let nextCoordinate = this.nextPossibilityCoordinate.topLeft(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).topLeft(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            } else if (coordinate.direction === Direction.DownRight) {
                // let nextCoordinate =this.nextPossibilityCoordinate.downRight(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).downRight(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            } else if (coordinate.direction === Direction.DownLeft) {
                // let nextCoordinate = this.nextPossibilityCoordinate.downLeft(coordinate);
                let nextCoordinate = new NextPossibilityCoordinate(this.numberOfRows, this.numberOfColumns).downLeft(coordinate);
                if (nextCoordinate === undefined) return;
                this.check_Possibility(member, nextCoordinate);
            }
        }
    }
}