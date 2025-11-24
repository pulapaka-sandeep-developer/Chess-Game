import { Cell } from "../_/interfaces/cell.interface";
import { Coordinate } from "../_/interfaces/coordinates.interface";
import { OptionalIndex } from "../_/interfaces/optionalIndex.interface";
export interface selectedCoin {
    color: string;
    clue: number;
    isWhiteCoin?: boolean
    isBlackCoin?: boolean
    rowIndex: number
    colunmIndex: number
}

export class PreventMove {

    constructor(public cell: OptionalIndex, public storePrevioueCell: selectedCoin[], public board: Cell[][]) { }

    statusCheck() {
        let isAllowed: boolean | undefined = false;
        let selectedCoin: selectedCoin = this.cell.cell.isWhiteCoin ?
            { color: "white", clue: this.cell.cell.clue, isWhiteCoin: true, rowIndex: this.cell.rowIndex, colunmIndex: this.cell.columnIndex }
            : { color: "black", clue: this.cell.cell.clue, isBlackCoin: true, rowIndex: this.cell.rowIndex, colunmIndex: this.cell.columnIndex };
        // console.log('coordinates 1', this.coordinates);
        // this.initialPushs(selectedCoin);

        if (this.storePrevioueCell.length === 0 && selectedCoin) {
            this.storePrevioueCell.push(selectedCoin);
            return true;
        }

        console.log('initial', this.storePrevioueCell);
        if (this.storePrevioueCell.length >= 1) {
            let length = this.storePrevioueCell.length - 1;//lateste item
            let letestedSelected = this.storePrevioueCell[length];
            // debugger
            if (selectedCoin.color === 'black') return isAllowed = this.blackCheck(letestedSelected, selectedCoin);
            if (selectedCoin.color === "white") return isAllowed = this.whiteCheck(letestedSelected, selectedCoin);
            // if (letestedSelected.isWhiteCoin === selectedCoin.isWhiteCoin)
        }
        return isAllowed;
    }

    private whiteCheck(letestedSelected: selectedCoin, selectedCoin: selectedCoin) {
        let isBlock: boolean = false;
        if (!letestedSelected.isWhiteCoin) {
            this.storePrevioueCell.push(selectedCoin);
            return true;
        }

        if (this.board[letestedSelected.rowIndex][letestedSelected.colunmIndex].clue === letestedSelected.clue) {
            this.storePrevioueCell.push(selectedCoin);
            // this.removeElement();
            return isBlock = true;
        }
        else if (letestedSelected.isWhiteCoin === this.cell.cell.isWhiteCoin) return undefined;

        return isBlock = false
    }

    private blackCheck(letestedSelected: selectedCoin, selectedCoin: selectedCoin) {
        let isBlock: Boolean = false
        if (!letestedSelected.isBlackCoin) {
            this.storePrevioueCell.push(selectedCoin);
            return true;
        }

        if (this.board[letestedSelected.rowIndex][letestedSelected.colunmIndex].clue === letestedSelected.clue) {
            this.storePrevioueCell.push(selectedCoin);
            // this.removeElement();
            return isBlock = true
        }
        else if (letestedSelected.isBlackCoin === this.cell.cell.isBlackCoin) return undefined;

        return isBlock = false;

    }

    private removeElement() {
        if (this.storePrevioueCell.length > 3) {
            this.storePrevioueCell.shift();
        }
    }

}