import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-header',
    styleUrls: ['header.component.scss'],
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    constructor(
        public modelService: ModelService,
    ) {
    }
}
