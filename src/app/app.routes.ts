import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PlayZoneComponent } from './play-zone/play-zone.component';
import { ChessComponent } from './chess/chess.component';

export const routes: Routes = [
  { path: '', component: PlayZoneComponent },
  // { path: 'profile-view', component: ProfileViewComponent },
  // { path: 'profile-info', component: BasicInfoComponent },
  { path: 'game-chess', component: ChessComponent },
];
