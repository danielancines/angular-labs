import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

  constructor(private _cartService: ShoppingCartService) { }

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
}
