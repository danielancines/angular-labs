import { IRestaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { meatApi } from '../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantsService {
    rests: IRestaurant[] = [
        {
            id: 'bread-bakery',
            name: 'Bread & Bakery',
            category: 'Bakery',
            deliveryEstimate: '25m',
            rating: 4.9,
            imagePath: 'assets/img/restaurants/breadbakery.png',
            about: 'A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.',
            hours: 'Funciona de segunda à sexta, de 8h às 23h'
        },
        {
            id: 'burger-house',
            name: 'Burger House',
            category: 'Hamburgers',
            deliveryEstimate: '100m',
            rating: 3.5,
            imagePath: 'assets/img/restaurants/burgerhouse.png',
            about: '40 anos se especializando em trash food.',
            hours: 'Funciona todos os dias, de 10h às 22h'
        }
    ];

    constructor(private _http: Http) { }

    restaurants(): Observable<IRestaurant[]> {
        return this._http.get(`${meatApi}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}
