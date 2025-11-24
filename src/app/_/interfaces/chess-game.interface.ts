import { Cell } from "./cell.interface";
import { Coordinate } from "./coordinates.interface";
import { OptionalIndex } from "./optionalIndex.interface";

export interface ChessBoard {
    board: Cell[][];
    numberOfRows: number;
    numberOfColumns: number;
    coordinates: Coordinate[];
    initialSelectedCoin: OptionalIndex;
    checkCoine: boolean //= false;
    possibilityCoordinates: OptionalIndex[];
    isWhiteTurn: boolean //= true;
    isBlackTurn: boolean //= false; 
    previousPosition: OptionalIndex;
    currentPosition: OptionalIndex;


    // Methods
    initializeBoard(): void;
    resetBoard(): void;
    selectCoin(rowIndex: number, columnIndex: number): void;
    moveCoin(rowIndex: number, columnIndex: number): void;
    getPossibleMoves(rowIndex: number, columnIndex: number): OptionalIndex[];
    isCheck(): boolean;
    isCheckmate(): boolean;
    switchTurn(): void;

    //helper methods
    loadBlackPieces(rowIndex: number, columnIndex: number): string;
    loadWhitePieces(rowIndex: number, columnIndex: number): string;
    isWithinBounds(rowIndex: number, columnIndex: number): boolean;
    isCellEmpty(rowIndex: number, columnIndex: number): boolean;
    isOpponentPiece(rowIndex: number, columnIndex: number, isWhiteTurn: boolean): boolean;
    cloneBoard(): Cell[][];
}