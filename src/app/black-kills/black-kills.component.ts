import { Component, DoCheck, Input, OnChanges } from '@angular/core';
import { OptionalIndex } from '../_/interfaces/optionalIndex.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-black-kills',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './black-kills.component.html',
  styleUrl: './black-kills.component.scss',
})
export class BlackKillsComponent implements OnChanges {
  @Input('data') data!: OptionalIndex[];

  dataf:OptionalIndex [] = [
    
  ];
  ngOnChanges() {
    // this.dataf.push(this.data) 
    // console.log(this.data);
  }
  // ngDoCheck(): void {
  //   console.log(this.data);
  // }
  
}
