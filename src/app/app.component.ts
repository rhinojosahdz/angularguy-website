import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'bob-app',
    styleUrls: ['app.component.scss'],
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public x: string;
    constructor(
        modelService: ModelService,
    ) {
        this.x = 'hello';
    }
}
