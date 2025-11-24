import { MatDialog } from "@angular/material/dialog";
import { Coins } from "../../enums/coins.enum";
import { Cell } from "../../interfaces/cell.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";
import { GameEnd } from "./gameEnd";
import { Coordinate } from "../../interfaces/coordinates.interface";
import { GameAlert } from "../gameAlert";
import { ChooseYourPower } from "../chooseYourPower";

export class Move {
    board: Cell[][] = [];
    coordinates: Coordinate[] = [];
    dialog: MatDialog;

    constructor(
        board: Cell[][],
        coordinates: Coordinate[],
        dialog: MatDialog
    ) {
        this.board = board;
        this.coordinates = coordinates;
        this.dialog = dialog;
    }

    $$move(currentPosition: OptionalIndex, previousPosition: OptionalIndex) {

        new GameAlert(this.board).alert();
        // console.log(this.currentPosition, this.previousPosition);
        if (previousPosition.cell.clue > 0 && currentPosition.cell.clue > 0) {
            this.changeCoine(currentPosition, previousPosition);
        } else {
            this.changeCoine(currentPosition, previousPosition);
        }
        // console.log('move',this.coordinates);

        // this.chooseYourPower(currentPosition); //dialog box needs here for power choose
        debugger
        new ChooseYourPower(this.dialog, this.board).chooseYourPower(currentPosition);
        new GameAlert(this.board).alert();
        this.coordinates.forEach(
            (e: any) => (this.board[e.row][e.column].highlight = false)
        );

        return this.coordinates = [];
    }

    changeCoine(currentPosition: OptionalIndex, previousPosition: OptionalIndex) {
        // this.gameEnd();
        // this.moveColor();
        new GameEnd(this.board, this.dialog).gameEnd();

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
        // this.checkColor();
        new GameEnd(this.board, this.dialog).gameEnd();
    }


}