import { Cell } from "../../interfaces/cell.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";

export class IsHighlightCoordinates {
    board: Cell[][] = [];

    constructor(board: Cell[][]) {
        this.board = board;
    }
    isHighlightCoordinates() {
        const highlightCoordinates: OptionalIndex[] = [];
        this.board.filter((row, i) => {
            row.filter((cell, j) => {
                if (cell.highlight)
                    highlightCoordinates.push({
                        rowIndex: i,
                        columnIndex: j,
                        cell: cell,
                    });
            });
        });
        return highlightCoordinates;
    }
}