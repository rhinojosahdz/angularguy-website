import { Injectable } from '@angular/core';
@Injectable()
export class ModelService {
    public CONSTS: any;
    public sideHeaderVisible: boolean = false;
    constructor() {
        this.CONSTS = process.env.CONSTS;
    }
}
