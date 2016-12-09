
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


@Injectable() export class jsonLoaderService  {
    constructor(private http: Http) { }

    getStuff(done) {
        let result = {};

        return Observable.merge(
            this.http.get("../fixtures/variables.json"),
            this.http.get("../fixtures/order.json")
        ).map((x) => x.json())
            .map((x) => {
                 result[x.index ? 'index': 'graph'] = x;
            })
            .subscribe(function (x) {
            },
            function (err) {
                console.log('Error: ' + err);
            },
            function () {
                done(result);
            });

    }
}
