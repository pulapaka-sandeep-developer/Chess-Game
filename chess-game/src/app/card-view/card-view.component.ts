import { Component, Input } from '@angular/core';
import { player } from '../_/interfaces/playersInfo.interface';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
})
export class CardViewComponent {
  @Input('winner') winner!: player;
  @Input('data') data: any;
}
