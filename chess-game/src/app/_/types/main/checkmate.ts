import { Coins } from "../../enums/coins.enum";
import { Cell } from "../../interfaces/cell.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";

export class Checkmate {
    board: Cell[][] = [];
    constructor(board: Cell[][]) {
        this.board = board;
    }
    checkmate(possibilityCoordinates: OptionalIndex[]) {
        possibilityCoordinates.forEach((e) => {
            if (this.board[e.rowIndex][e.columnIndex].clue === Coins._wKing) {
                this.board[e.rowIndex][e.columnIndex].isAlert = true;
                setTimeout(() => {
                    alert('Check in whtie  king');
                }, 100);
            }
            if (this.board[e.rowIndex][e.columnIndex].clue === Coins._bKing) {
                this.board[e.rowIndex][e.columnIndex].isAlert = true;
                setTimeout(() => {
                    alert('Check in black king');
                    //when check in black king in alert box
                    //get possiable coordinates to move on black king(check king)
                }, 100);
            }
            if (e) {
                e.cell.highlight = false;
            }
        });
        possibilityCoordinates = [];
    }
}