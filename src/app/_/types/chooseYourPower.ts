import { MatDialog } from "@angular/material/dialog";
import { Cell } from "../interfaces/cell.interface";
import { OptionalIndex } from "../interfaces/optionalIndex.interface";
import { DialogBoxComponent } from "../../dialog-box/dialog-box.component";
import { POWERSWHITE } from "../const/assigning-white-fontAwesome";
import { POWERSBLACk } from "../const/assigning-black-fontAwesome";

export class ChooseYourPower {
    dialog: MatDialog;
    whiteCoin: Cell[] = POWERSWHITE
    blackCoin: Cell[] = POWERSBLACk
    board: Cell[][] = [];
    constructor(
        dialog: MatDialog,
        board: Cell[][]
    ) {
        this.dialog = dialog;
        this.board = board;
    }

    chooseYourPower(member: OptionalIndex) {
        if (member.cell.isWhiteCoin) {
            const whiteCoins: Cell[] = [];
            this.whiteCoin.filter((e, i) => {
                if (i > 7) whiteCoins.push(e);
            });

            if (whiteCoins && whiteCoins.length && whiteCoins.length > -1) {
                this.whitePowers(member, whiteCoins);
            }
        } else if (member.cell.isBlackCoin) {
            const blackCoins: Cell[] = [];
            this.blackCoin.filter((e, i) => {
                if (i > 7) blackCoins.push(e);
            });

            if (blackCoins && blackCoins.length && blackCoins.length > -1) {
                this.blackPowers(member, blackCoins);
            }
        }
    }

    private whitePowers(member: OptionalIndex, whiteCoins: Cell[]) {
        let selectedMember = member;
        for (let i = 0; i < whiteCoins.length; i++) {
            if (member.rowIndex > 6 && member.cell.clue === whiteCoins[i].clue) {
                const dialogRef = this.dialog.open(DialogBoxComponent, {
                    data: member,
                });
                dialogRef.afterClosed().subscribe((selectedCell) => {
                    if (!selectedMember) return;
                    this.updateChooseCoine(selectedMember, selectedCell);
                });
            }
        }
    }

    private blackPowers(member: OptionalIndex, blackCoins: Cell[]) {
        let selectedMember = member;
        for (let j = 0; j < blackCoins.length; j++) {
            if (member.rowIndex === 0 && member.cell.clue === blackCoins[j].clue) {
                const dialogRef = this.dialog.open(DialogBoxComponent, {
                    data: member,
                });
                dialogRef.afterClosed().subscribe((selectedCell) => {
                    if (!selectedMember) return;
                    this.updateChooseCoine(selectedMember, selectedCell);
                });
            }
        }
    }

    private updateChooseCoine(selectedMember: OptionalIndex, selectedCell: Cell) {
        this.board[selectedMember.rowIndex][selectedMember.columnIndex].clue =
            selectedCell.clue;
        this.board[selectedMember.rowIndex][selectedMember.columnIndex].icon =
            selectedCell.icon;
    }


}