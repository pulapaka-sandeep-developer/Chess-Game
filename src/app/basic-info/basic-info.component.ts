import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ProfileViewComponent } from '../profile-view/profile-view.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { player } from '../_/interfaces/playersInfo.interface';
import { GameLegendsComponent } from '../game-legends/game-legends.component';
@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss',
})
export class BasicInfoComponent implements OnInit {
  playersData: player[] = [];
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BasicInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog
  ) {}

  selectFormGroup!: FormGroup;

  playerName: string = 'First';

  player1: boolean = true;
  player2: boolean = false;

  playerOneUserInfo!: FormGroup;
  playerTwoUserInfo!: FormGroup;

  playerOneimageUrl!: any;
  playerTwoimageUrl!: any;
  @ViewChild('fileInput') el!: ElementRef;

  colors: any[] = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'White' },
  ];

  gender: any[] = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Others' },
  ];

  ngOnInit() {
    this.buildFormGroup();
  }

  buildFormGroup() {
    this.selectFormGroup = this.fb.group({
      name: [
        '',
        [
          Validators.minLength(0),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      age: ['', [Validators.required]],
      gender: [
        '',
        [
          Validators.minLength(0),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      profilePicture: ['', [Validators.required]],
      chooseColor: [
        '',
        [
          Validators.minLength(0),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
    });
    this.selectsFormGroup();
  }
  selectsFormGroup() {
    if (!this.selectFormGroup) return;
    if (this.player1) {
      this.playerName = 'First';
      this.playerOneUserInfo = this.selectFormGroup;
      // console.log('one', this.playerOneUserInfo);

    } else if (this.player2) {
      this.playerName = 'Second';
      this.playerTwoUserInfo = this.selectFormGroup;
      // console.log('two', this.playerTwoUserInfo);
    }
  }

  uploadFile(event: any, number: number) {
    // console.log(number);

    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        if (number === 1) {
          this.playerOneimageUrl = reader.result;
          this.playerOneUserInfo.patchValue({
            profilePicture: reader.result,
          });
        } else if (number === 2) {
          this.playerTwoimageUrl = reader.result;
          this.playerTwoUserInfo.patchValue({
            profilePicture: reader.result,
          });
        }
      };
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();
    }
  }

  $$startGame() {
    if (this.player1) {
      localStorage.clear();
      let playerOne = this.playerOneUserInfo.value;
      let index = this.colors.findIndex(
        (e) => e.value === playerOne.chooseColor
      );
      this.colors.splice(index, 1);
      this.playersData.push(playerOne);
      localStorage.setItem('playerOne', JSON.stringify(playerOne));
      this.playerOneUserInfo.reset();
      this.playerOneimageUrl = '';
      this.player1 = false;
      this.player2 = true;
      this.buildFormGroup();
    } else if (this.player2) {
      // let playerTwo = this.playerTwoUserInfo.value;
      let playerTwo = this.playerOneUserInfo.value;
      console.log(playerTwo);
      
      this.playersData.push(playerTwo);
      console.log(this.playersData);
      localStorage.setItem('playerTwo', JSON.stringify(playerTwo));
      this.playerTwoUserInfo.reset();
      this.playerTwoimageUrl = '';
      this.player2 = false;
      this.player1 = true;
      this.navigateTo();
      this.$$close();
    }
  }

  navigateTo() {
    this.matDialog.open(GameLegendsComponent, {
      data: this.playersData,
      width: '20%',
      height: '50%',
      disableClose: true,
    });
  }

  $$close() {
    this.dialogRef.close();
  }
}
