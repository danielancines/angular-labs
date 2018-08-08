import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(private _restaurantService: RestaurantsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this._restaurantService.reviewsOfRestaurant(this._route.parent.snapshot.params['id']);
  }

}
