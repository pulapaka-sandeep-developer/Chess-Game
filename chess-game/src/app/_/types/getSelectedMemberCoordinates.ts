import { Coins } from '../enums/coins.enum';
import { Coordinate } from '../interfaces/coordinates.intreface';
import { OptionalIndex } from '../interfaces/optionalIndex.interface';
import { GetRooksCoordinates } from './getRooksCoordinates';

export class GetSelectedMemberCoordinates {
  constructor() {}

  getMemberCoordinates(member: OptionalIndex, count?: boolean) {
    // this.initialSelectedCoin = member;
    let coordinates: Coordinate[] = [];

    if (
      member.cell.clue === Coins._bRookL ||
      member.cell.clue === Coins._bRookR ||
      member.cell.clue === Coins._wRookL ||
      member.cell.clue === Coins._wRookR
    ) {
      coordinates = new GetRooksCoordinates().rook(
        member.rowIndex,
        member.columnIndex
      );
    } else if (
      member.cell.clue === Coins._bknightL ||
      member.cell.clue === Coins._bKnightR ||
      member.cell.clue === Coins._wknightL ||
      member.cell.clue === Coins._wKnightR
    ) {
      //   this.knightPalyers(member, count);
    } else if (
      member.cell.clue === Coins._bBishopL ||
      member.cell.clue === Coins._bBishopR ||
      member.cell.clue === Coins._wBishopL ||
      member.cell.clue === Coins._wBishopR
    ) {
      //   coordinates = this.bishop(member.rowIndex, member.columnIndex);
    } else if (
      member.cell.clue === Coins._bQueen ||
      member.cell.clue === Coins._wQueen
    ) {
      //   coordinates = this.queen(member.rowIndex, member.columnIndex);
    } else if (
      member.cell.clue === Coins._bKing ||
      member.cell.clue === Coins._wKing
    ) {
      // coordinates = this.king(member.rowIndex, member.columnIndex);//no
      //   this.kingPalyers(member, count);
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
      //   this.pawnPalyers(member, count);
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
      //   this.pawnPalyers(member);
    }
    return coordinates;
  }
}
