import { POWERSBLACk } from '../const/assigning-black-fontAwesome';
import { Cell } from '../interfaces/cell.interface';

export class LoadBlackPowers {
  numberOfRows: number = 8;
  numberOfColumns: number = 8;
  blackCoin = POWERSBLACk;
  // board: Cell[][] = [];
  constructor(private board: Cell[][]) {//private board: Cell[][]
    // console.log(board);

  }

  loadBlackConies() {
    this.board[this.numberOfRows - 1][this.numberOfColumns - 1] = {
      clue: this.blackCoin[0].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[0].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 2] = {
      clue: this.blackCoin[1].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[1].icon,
      color: false,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 3] = {
      clue: this.blackCoin[2].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[2].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 4] = {
      clue: this.blackCoin[3].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[3].icon,
      color: false,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 5] = {
      clue: this.blackCoin[4].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[4].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 6] = {
      clue: this.blackCoin[5].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[5].icon,
      color: false,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 7] = {
      clue: this.blackCoin[6].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[6].icon,
      color: true,
    };
    this.board[this.numberOfRows - 1][this.numberOfColumns - 8] = {
      clue: this.blackCoin[7].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[7].icon,
      color: false,
    };
    //
    this.board[this.numberOfRows - 2][this.numberOfColumns - 1] = {
      clue: this.blackCoin[8].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[8].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 2] = {
      clue: this.blackCoin[9].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[9].icon,
      color: true,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 3] = {
      clue: this.blackCoin[10].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[10].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 4] = {
      clue: this.blackCoin[11].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[11].icon,
      color: true,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 5] = {
      clue: this.blackCoin[12].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[12].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 6] = {
      clue: this.blackCoin[13].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[13].icon,
      color: true,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 7] = {
      clue: this.blackCoin[14].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[14].icon,
      color: false,
    };
    this.board[this.numberOfRows - 2][this.numberOfColumns - 8] = {
      clue: this.blackCoin[15].clue,
      highlight: false,
      isBlackCoin: true,
      icon: this.blackCoin[15].icon,
      color: true,
    }; 
  }
}
export const getLoadBlackPowers = new LoadBlackPowers([]);