import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-content',
    styleUrls: ['content.component.scss'],
    templateUrl: 'content.component.html',
})
export class ContentComponent {
    constructor(
        modelService: ModelService,
    ) {
    }
}
