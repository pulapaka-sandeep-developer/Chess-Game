import { Coins } from "../enums/coins.enum";
import { Cell } from "../interfaces/cell.interface";

export class GameAlert {
    board: Cell[][];
    constructor(board: Cell[][]) {
        this.board = board;
    }
    alert() {
        this.board.filter((rows, i) => {
            rows.filter((e, j) => {
                if (e.clue === Coins._wKing) {
                    e.isAlert = false;
                }
                if (e.clue === Coins._bKing) {
                    e.isAlert = false;
                }
            });
        });
    }
}