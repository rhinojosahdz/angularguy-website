import { Injectable } from '@angular/core';
@Injectable()
export class ModelService {
    public CONSTS: any;
    constructor() {
        this.CONSTS = process.env.CONSTS;
    }
}
