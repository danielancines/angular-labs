import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private _shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this._shoppingCartService.items;
  }

  total(): number {
    return this._shoppingCartService.total();
  }

  clear(): void {
    this._shoppingCartService.clear();
  }

  removeItem(item: any) {
    this._shoppingCartService.removeItem(item);
  }

  addItem(item: any) {
    this._shoppingCartService.addItem(item);
  }
}
