import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { MatButtonModule } from '@angular/material/button';
import { CongratulationsComponent } from '../congratulations/congratulations.component';

@Component({
  selector: 'app-play-zone',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './play-zone.component.html',
  styleUrl: './play-zone.component.scss',
})
export class PlayZoneComponent {
  constructor(private matDialog: MatDialog) {}
  data = 
    {
      name: 'ee',
      age: '34',
      gender: 'Male',
      profilePicture: 'C:\\fakepath\\2022-04-27.png',
      color: 'Black',
      isWhite: true,
      count: 0,
    }
  

  $$playZone() {
    this.matDialog.open(BasicInfoComponent, {
      width: '24%',
      height: '63.4%',
      disableClose: true,
    });
  }

  $$close() {
    this.matDialog.closeAll();
  }
}
