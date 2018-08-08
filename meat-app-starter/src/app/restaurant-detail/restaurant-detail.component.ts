import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { IRestaurant } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: IRestaurant;
  constructor(private _restaurantsService: RestaurantsService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._restaurantsService.restaurantById(this._route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
