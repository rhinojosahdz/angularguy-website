import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-side-header',
    styleUrls: ['side-header.component.scss'],
    templateUrl: 'side-header.component.html',
})
export class SideHeaderComponent {
    constructor(
        public modelService: ModelService,
    ) {
    }
}
