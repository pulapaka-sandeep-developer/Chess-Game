import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WiringService {
  constructor() {}

  selcetedCoin$ = new Subject();
}
