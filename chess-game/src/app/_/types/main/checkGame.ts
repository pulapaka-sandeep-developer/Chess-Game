import { Cell } from "../../interfaces/cell.interface";
import { Coordinate } from "../../interfaces/coordinates.interface";
import { OptionalIndex } from "../../interfaces/optionalIndex.interface";
import { CheckPossibility } from "../players/check_Possibilities";
import { GetAllMembersCoordinates } from "../rootGetsMembersCoordinates";
import { Checkmate } from "./checkmate";
import { IsHighlightCoordinates } from "./isHighlightCoordinates";

export class CheckGame {

    board: Cell[][] = [];
    coordinates: Coordinate[] = [];

    constructor(board: Cell[][], coordinates: Coordinate[]) {
        this.board = board;
        this.coordinates = coordinates;
    }
    check() {
        this.board.filter((row, i) =>
            row.filter((cell, j) => {
                if (cell.isBlackCoin) {
                    let coins: OptionalIndex = {
                        rowIndex: i,
                        columnIndex: j,
                        cell: cell,
                    };
                    // let coord = this.getMemberCoordinates(coins, false);
                    // this.checkPossibilities(coins, coord, false);
                    // this.checkmate(highlightCoordinates);
                    let coord = new GetAllMembersCoordinates(this.board, this.coordinates).getMemberCoordinates(coins, false);
                    new CheckPossibility(this.board, this.coordinates).checkPossibilities(coins, coord, false);
                    const highlightCoordinates = new IsHighlightCoordinates(this.board).isHighlightCoordinates();
                    new Checkmate(this.board).checkmate(highlightCoordinates);
                }
                if (cell.isWhiteCoin) {
                    let coins: OptionalIndex = {
                        rowIndex: i,
                        columnIndex: j,
                        cell: cell,
                    };
                    // let coord = this.getMemberCoordinates(coins, false);
                    // let coord = new GetAllMembersCoordinates(this.board, this.coordinates).getMemberCoordinates(coins, false);
                    // this.checkPossibilities(coins, coord, false);
                    // const highlightCoordinates = this.isHighlightCoordinates();
                    // this.checkmate(highlightCoordinates);
                    let coord = new GetAllMembersCoordinates(this.board, this.coordinates).getMemberCoordinates(coins, false);
                    new CheckPossibility(this.board, this.coordinates).checkPossibilities(coins, coord, false);
                    const highlightCoordinates = new IsHighlightCoordinates(this.board).isHighlightCoordinates();
                    new Checkmate(this.board).checkmate(highlightCoordinates);
                }
            })
        );
    }

}