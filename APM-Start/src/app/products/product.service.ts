import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';
    constructor(private _httpClient: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // getProduct(id: number): Observable<IProduct> {
    //     const products = this._httpClient.get<IProduct[]>(this._productUrl);
    //     products.subscribe(products => {
    //         return products.filter(p => p.productId === id);
    //     });
    // }

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
