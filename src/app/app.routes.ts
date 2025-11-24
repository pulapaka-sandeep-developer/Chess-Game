import { Routes } from '@angular/router';
import { PlayZoneComponent } from './play-zone/play-zone.component';
import { ChessComponent } from './chess/chess.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chess', pathMatch: 'full' },
  { path: 'chess', component: ChessComponent },
];
