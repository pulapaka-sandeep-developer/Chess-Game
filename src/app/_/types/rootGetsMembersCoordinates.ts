import { Coins } from "../enums/coins.enum";
import { Cell } from "../interfaces/cell.interface";
import { Coordinate } from "../interfaces/coordinates.interface";
import { OptionalIndex } from "../interfaces/optionalIndex.interface";
import { BishopsCoordinates } from "./getBishopsCoordinates";
import { QueensCoordinates } from "./getQueensCoordinates";
import { RooksCoordinates } from "./getRooksCoordinates";
import { KnightPlayers } from "./players/kinghtPlayer";
import { KingPlayers } from "./players/kingPlayers";
import { PawnPlayers } from "./players/pawnPlayers";

export class GetAllMembersCoordinates {

    board: Cell[][] = [];
    coordinates: Coordinate[] = []
    constructor(board: Cell[][], coordinates: Coordinate[]) {
        this.board = board;
        this.coordinates = coordinates;
    }

    getMemberCoordinates(member: OptionalIndex, count?: boolean) {
        // this.initialSelectedCoin = member;
        let coordinates: Coordinate[] = [];

        if (
            member.cell.clue === Coins._bRookL ||
            member.cell.clue === Coins._bRookR ||
            member.cell.clue === Coins._wRookL ||
            member.cell.clue === Coins._wRookR
        ) {
            // coordinates = this.rook(member.rowIndex, member.columnIndex);
            coordinates = new RooksCoordinates().rook(member.rowIndex, member.columnIndex);
        } else if (
            member.cell.clue === Coins._bknightL ||
            member.cell.clue === Coins._bKnightR ||
            member.cell.clue === Coins._wknightL ||
            member.cell.clue === Coins._wKnightR
        ) {
            // this.knightPalyers(member, count);
            new KnightPlayers(this.board, this.coordinates).knightPlayers(member, count);
        } else if (
            member.cell.clue === Coins._bBishopL ||
            member.cell.clue === Coins._bBishopR ||
            member.cell.clue === Coins._wBishopL ||
            member.cell.clue === Coins._wBishopR
        ) {
            // coordinates = this.bishop(member.rowIndex, member.columnIndex);
            coordinates = new BishopsCoordinates().bishop(member.rowIndex, member.columnIndex);
        } else if (
            member.cell.clue === Coins._bQueen ||
            member.cell.clue === Coins._wQueen
        ) {
            // coordinates = this.queen(member.rowIndex, member.columnIndex);
            coordinates = new QueensCoordinates().queen(member.rowIndex, member.columnIndex);
        } else if (
            member.cell.clue === Coins._bKing ||
            member.cell.clue === Coins._wKing
        ) {
            // coordinates = this.king(member.rowIndex, member.columnIndex);
            // this.kingPalyers(member, count);
            new KingPlayers(this.board).kingPlayers(member, count);
        } else if (
            member.cell.clue === Coins._bPawn1 ||
            member.cell.clue === Coins._bPawn2 ||
            member.cell.clue === Coins._bPawn3 ||
            member.cell.clue === Coins._bPawn4 ||
            member.cell.clue === Coins._bPawn5 ||
            member.cell.clue === Coins._bPawn6 ||
            member.cell.clue === Coins._bPawn7 ||
            member.cell.clue === Coins._bPawn8
        ) {
            // this.pawnPalyers(member, count);
            new PawnPlayers(this.board, this.coordinates).pawnPlayers(member);
        } else if (
            member.cell.clue === Coins._wPawn1 ||
            member.cell.clue === Coins._wPawn2 ||
            member.cell.clue === Coins._wPawn3 ||
            member.cell.clue === Coins._wPawn4 ||
            member.cell.clue === Coins._wPawn5 ||
            member.cell.clue === Coins._wPawn6 ||
            member.cell.clue === Coins._wPawn7 ||
            member.cell.clue === Coins._wPawn8
        ) {
            // this.pawnPalyers(member);
            new PawnPlayers(this.board, this.coordinates).pawnPlayers(member);
        }
        return coordinates;
    }
}