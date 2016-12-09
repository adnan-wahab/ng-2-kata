import { Injectable } from '@angular/core';

import {jsonLoaderService} from './json-loader.service';

@Injectable()
export class varNameService {
    index: Object;
    order: Object;

    constructor(private json: jsonLoaderService) {
        this.json.getStuff((res) => {
            this.index = res.index;
            this.order = res.graph;
        });
    }

    getPosition(name: string) {
        for (let index in this.order) {
            if (this.order[index].name == name) {
                return index;
            }
        }
    }
}
