import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Observable } from 'rxjs/Observable';
import { Order } from './order';
import { Http, Headers, RequestOptions } from '@angular/http';
import { meatApi } from './../app.api';

@Injectable()
export class OrderService {

  constructor(private _cartService: ShoppingCartService, private _http: Http) { }

  cartItems(): CartItem[] {
    return this._cartService.items;
  }

  increaseQty(item: CartItem) {
    this._cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this._cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this._cartService.removeItem(item);
  }

  itemsValue(): number {
    return this._cartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(`${meatApi}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
      .map(response => response.json())
      .map(order => order.id);
  }

  clear(): void {
    this._cartService.clear();
  }
}
