import { POWERSWHITE } from '../const/assigning-white-fontAwesome';
import { Cell } from '../interfaces/cell.interface';

export class GetLoadWhitePowers {
  numberOfRows: number = 8;
  numberOfColumns: number = 8;
  whiteCoin = POWERSWHITE;

  constructor(private board: Cell[][]) {}

  loadWhiteCoines() {
    this.board[this.numberOfRows - 8][this.numberOfColumns - 1] = {
      clue: this.whiteCoin[0].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[0].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 2] = {
      clue: this.whiteCoin[1].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[1].icon,
      color: true,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 3] = {
      clue: this.whiteCoin[2].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[2].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 4] = {
      clue: this.whiteCoin[3].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[3].icon,
      color: true,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 5] = {
      clue: this.whiteCoin[4].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[4].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 6] = {
      clue: this.whiteCoin[5].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[5].icon,
      color: true,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 7] = {
      clue: this.whiteCoin[6].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[6].icon,
      color: false,
    };
    this.board[this.numberOfRows - 8][this.numberOfColumns - 8] = {
      clue: this.whiteCoin[7].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[7].icon,
      color: true,
    };

    this.board[this.numberOfRows - 7][this.numberOfColumns - 1] = {
      clue: this.whiteCoin[8].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[8].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 2] = {
      clue: this.whiteCoin[9].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[9].icon,
      color: false,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 3] = {
      clue: this.whiteCoin[10].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[10].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 4] = {
      clue: this.whiteCoin[11].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[11].icon,
      color: false,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 5] = {
      clue: this.whiteCoin[12].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[12].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 6] = {
      clue: this.whiteCoin[13].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[13].icon,
      color: false,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 7] = {
      clue: this.whiteCoin[14].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[14].icon,
      color: true,
    };
    this.board[this.numberOfRows - 7][this.numberOfColumns - 8] = {
      clue: this.whiteCoin[15].clue,
      highlight: false,
      isWhiteCoin: true,
      icon: this.whiteCoin[15].icon,
    };
  }
}
