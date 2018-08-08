import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { IMenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu: Observable<IMenuItem[]>;
  constructor(private _restaurantsService: RestaurantsService,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.menu = this._restaurantsService.menuOfRestaurants(this._route.parent.snapshot.params['id']);
  }

  addMenuItem(item: IMenuItem){
    console.log(item);
  }

}
