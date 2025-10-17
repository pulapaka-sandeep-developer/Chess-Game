import { MatDialog } from "@angular/material/dialog";
import { CongratulationsComponent } from "../../../congratulations/congratulations.component";
import { Coins } from "../../enums/coins.enum";
import { Cell } from "../../interfaces/cell.interface";

export class GameEnd {
    board: any[][] = [];
    dialog: MatDialog;
    constructor(board: any[][], dialog: MatDialog) {
        this.board = board;
        this.dialog = dialog;
    }

    gameEnd() {
        let checkGame: Cell[] = [];
        this.board.filter((rows, i) => {
            rows.filter((e, j) => {
                if (e.clue === Coins._wKing) {
                    checkGame.push(e);
                }
                if (e.clue === Coins._bKing) {
                    checkGame.push(e);
                }
            });
        });
        if (checkGame && checkGame.length && checkGame.length === 1) {
            if (checkGame[0].isWhiteKing)
                this.openCongratulationsComponent(checkGame);
            else if (checkGame[0].isBlackKing)
                this.openCongratulationsComponent(checkGame);
        }
        checkGame = [];
    }
    
    openCongratulationsComponent(checkGame: Cell[]) {

        let userData = [
            {
                name: 'Sandeep',
                age: '28',
                gender: 'Male',
                profilePicture: '',
                color: 'White',
                isWhite: true,
                count: 1,
                isBlack: false,
                clue: 2,
            },
            {
                clue: 1,
                name: 'Raghu',
                age: '28',
                gender: 'Male',
                profilePicture: '',
                color: 'Black',
                isBlack: true,
                isWhite: false,
                count: 1,
            },
        ];

        let a = userData.find((e) => e.clue === 1);
        console.log('user', a);

        this.dialog.open(CongratulationsComponent, {
            data: [a],
            width: '28%',
            height: '56.4%',
            disableClose: true,
        });
    }
}
