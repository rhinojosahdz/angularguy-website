import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-technologies',
    styleUrls: ['technologies.component.scss'],
    templateUrl: 'technologies.component.html',
})
export class TechnologiesComponent {
    public stars = [{}, {}, {}, {}, {}];
    constructor(
        public modelService: ModelService,
    ) {
    }
}
