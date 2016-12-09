import { Injectable } from '@angular/core';
import {jsonLoaderService} from './json-loader.service';

@Injectable()
export class varIndexService{
    index: Object;
    graph: Object;


    constructor(private json: jsonLoaderService) {
        this.json.getStuff((res) => {
            this.index = res.index;
            this.graph = res.graph;
        })
    }

    getVar(index: number) {
        return this.graph[index];
    }
}
