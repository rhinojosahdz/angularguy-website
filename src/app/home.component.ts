import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-home',
    styleUrls: ['home.component.scss'],
    templateUrl: 'home.component.html',
})
export class HomeComponent {
    constructor(
        modelService: ModelService,
    ) {
    }
}
