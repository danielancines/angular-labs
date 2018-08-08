import { Component, OnInit } from '@angular/core';
import { IRestaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: IRestaurant[];

  constructor(private _restaurantsService: RestaurantsService) {

  }

  ngOnInit() {
    this._restaurantsService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants);
  }
}
