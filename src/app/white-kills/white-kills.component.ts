import { Component, Input } from '@angular/core';
import { OptionalIndex } from '../_/interfaces/optionalIndex.interface';

@Component({
  selector: 'app-white-kills',
  standalone: true,
  imports: [],
  templateUrl: './white-kills.component.html',
  styleUrl: './white-kills.component.scss'
})
export class WhiteKillsComponent {
  @Input('data') data!: OptionalIndex[];

}
