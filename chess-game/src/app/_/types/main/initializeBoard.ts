import { Coins } from "../../enums/coins.enum";
import { Cell } from "../../interfaces/cell.interface";
import { LoadBlackPowers } from "../getLoadBlackPowers";
import { LoadWhitePowers } from "../getLoadWhitePowers";

export class InitializeBoard {
    // board: Cell[][] = [];
    numberOfRows: number = 8;
    numberOfColumns: number = 8;
    constructor(public board: any[][]) {
        // this.board = board;
    }

    initializeBoard(): Cell[][] {
        this.board = new Array(this.numberOfRows);
        for (let i = 0; i < this.numberOfRows; i++) {
            this.board[i] = new Array(this.numberOfColumns);
            for (let j = 0; j < this.numberOfColumns; j++) {
                this.board[i][j] = {
                    clue: Coins.Zero,
                    highlight: false,
                    color:
                        i % 2 === 0 && j % 2 === 0
                            ? true
                            : i % 2 !== 0 && j % 2 !== 0
                                ? true
                                : false,
                };
            }
        }
        console.log(this.board);
        this.prepareBoard();
        return this.board;
    }

    private prepareBoard() {
        new LoadBlackPowers(this.board).loadBlackConies();
        new LoadWhitePowers(this.board).loadWhiteCoines();

        this.board.filter((rows, i) => {
            rows.filter((e, j) => {
                if (e.clue === Coins._bKing) {
                    this.board[i][j].isBlackKing = true;
                }
                if (e.clue === Coins._wKing) {
                    this.board[i][j].isWhiteKing = true;
                }
            });
        });
    }
}