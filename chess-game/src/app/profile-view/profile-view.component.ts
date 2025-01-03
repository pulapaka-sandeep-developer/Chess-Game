import { Component, Inject, Input, input, OnInit } from '@angular/core';
import { CardViewComponent } from '../card-view/card-view.component';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { player } from '../_/interfaces/playersInfo.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [CardViewComponent, FormsModule, CommonModule],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss',
})
export class ProfileViewComponent implements OnInit {
  constructor(
    private router: Router // private dialogRef: MatDialogRef<ProfileViewComponent>, // @Inject(MAT_DIALOG_DATA) public data: player[]
  ) {}
  data: player[] = [
    {
      name: 'ee',
      age: '34',
      gender: 'Male',
      profilePicture: 'C:\\fakepath\\2022-04-27.png',
      color: 'Black',
      isWhite: true,
      count:0
    },
    {
      name: 'ss',
      age: '33',
      gender: 'Male',
      profilePicture: 'C:\\fakepath\\2022-04-27.png',
      color: 'White',
      isBlack: true,
      count:0
    },
  ];

  ngOnInit(): void {
    this.data.forEach((e) => {
      if (e.color === 'Black') {
        e.isBlack = true;
      } else e.isWhite = true;
    });
  }

  $$playGame() {
    this.router.navigate(['/game-chess']);
    // this.dialogRef.close();
  }
}
