import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: IMenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emittAddEvent() {
    this.add.emit(this.menuItem);
  }
}
