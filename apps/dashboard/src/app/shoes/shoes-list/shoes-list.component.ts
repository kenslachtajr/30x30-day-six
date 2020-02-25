import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shoe } from '@shoes/core-data';

@Component({
  selector: 'shoes-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent {
  @Input() shoes: Shoe[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
