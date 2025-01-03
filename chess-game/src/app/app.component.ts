import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { GameLegendsComponent } from "./game-legends/game-legends.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chess-game';

  constructor(private matDialog: MatDialog) {}

  $$playZone() {
    this.matDialog.open(BasicInfoComponent, {
      width: '50%',
      height: '70%',
      disableClose: true,
    });
  }

  $$cong() {
    this.matDialog.open(CongratulationsComponent, {
      width: '50%',
      height: '70%',
      disableClose: true,
    });
  }

  $$close() {
    this.matDialog.closeAll();
  }
}
